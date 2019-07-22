var thirstyFunctions;

jQuery( document ).ready( function($) {

    thirstyFunctions = {

        /**
         * Function that holds all of the necessary events to trigger a record link stat.
         *
         * @since 3.2.0
         */
        recordLinkStatEvents : function() {

            // record link on normal click
            if ( thirsty_global_vars.enable_record_stats == 'yes' )
                $( 'body' ).on( 'click' , 'a' , thirstyFunctions.recordLinkStat );
        },

        /**
         * Record link clicks AJAX event trigger.
         *
         * @since 3.0.0
         * @since 3.2.0 Removed event trigger. Added keyword variable in the AJAX trigger.
         * @since 3.3.0 Add javascript redirect feature.
         * @since 3.3.1 Make sure the duplicate click prevention only works on affiliate links.
         * @since 3.3.7 Add fail script for enhanced js redirect to still work on AJAX failure.
         * @since 3.4.0 Make sure query strings are added back when enhanced js redirect is active.
         */
        recordLinkStat : function( e ) {

            var $link   = $(this),
                href    = $link.attr( 'href' ),
                linkID  = $link.data( 'linkid' ),
                keyword = $link[0].innerText,
                qs      = href ? href.split('?')[1] : '', // get the url query strings
                imgsrc,
                newWindow;

            if ( ! keyword ) keyword = $link.text();

            // if link clicked is not an affiliate link, then skip.
            if ( ! thirstyFunctions.isThirstyLink( href ) && ! linkID ) return;
            
            // prevent duplicate clicks.
            if ( $link.data( "clicked" ) ) {
                e.preventDefault();
                return;
            }
            $link.data( "clicked"  , true );
    
            // get image filename and use it as keyword.
            if ( ! keyword && $link.find( 'img' ).length ) {
    
                imgsrc  = $link.find( 'img' ).prop( 'src' ).split('/');
                keyword = imgsrc[ imgsrc.length - 1 ];
            }
    
            if ( thirsty_global_vars.enable_js_redirect === 'yes' && $link.data( 'nojs' ) != true ) {
    
                e.preventDefault();
    
                if ( $link.prop( 'target' ) == '_blank' && ! thirstyFunctions.disableNewWindow() )
                    newWindow = window.open( '' , '_blank' );
            }
    
            $.post( thirsty_global_vars.ajax_url , {
                action  : 'ta_click_data_redirect',
                href    : href,
                page    : window.location.href,
                link_id : linkID,
                keyword : keyword,
                qs      : qs
            } , function( redirect_url ) {
    
                $link.data( "clicked"  , false );
    
                if ( thirsty_global_vars.enable_js_redirect !== 'yes' || $link.data( 'nojs' ) == true )
                    return;
    
                if ( newWindow )
                    newWindow.location.href = redirect_url ? redirect_url : href;
                else
                    window.location.href = redirect_url ? redirect_url : href;

            } ).fail( function() {

                $link.data( "clicked"  , false );

                if ( thirsty_global_vars.enable_js_redirect !== 'yes' || $link.data( 'nojs' ) == true )
                    return;

                if ( newWindow )
                    newWindow.location.href = href;
                else
                    window.location.href = href;

            } );
        },

        /**
         * Check if we need to disable new window for enhanced javascript redirects.
         * This is intended to fix issue on browsing sites with FB/Messenger webview browser on iPhones.
         * 
         * @since 3.3.6
         * @since 3.6 Add support for Instagram, Pinterest, Twitter, Electron and Steam.
         */
        disableNewWindow : function() {

            var strings = [ 'FBAN' , 'MessengerForiOS' , 'FBAV' , 'Instagram' , 'Pinterest' , 'Twitter' , 'Electron' , 'Steam' ];

            for ( var x in strings ) {
                if ( navigator.userAgent.indexOf( strings[x] ) >= 0 )
                    return true;
            }

            return false;
        },

        /**
         * Function to check if the loaded link is a ThirstyAffiliates link or not.
         *
         * @since 3.0.0
         * @since 3.1.2 Make function detect root relative URLs.
         */
        isThirstyLink : function( href ) {

            if ( ! href )
                return;

            href = href.replace( 'http:' , '{protocol}' ).replace( 'https:' , '{protocol}' );

            var link_uri = href.replace( thirsty_global_vars.home_url , '' ).replace( '{protocol}' , '' ),
                link_prefix, new_href;

            link_uri    = link_uri.indexOf( '/' ) == 0 ? link_uri.replace( '/' , '' ) : link_uri;
            link_prefix = link_uri.substr( 0 , link_uri.indexOf( '/' ) ),
            new_href    = href.replace( '/' + link_prefix + '/' , '/' + thirsty_global_vars.link_prefix + '/' ).replace( '{protocol}' , window.location.protocol );

            return ( link_prefix && $.inArray( link_prefix , link_prefixes ) > -1 ) ? new_href : false;
        },

        /**
         * Function to check if the loaded link is a ThirstyAffiliates link or not.
         *
         * @since 3.0.0
         * @since 3.3.0 Add data-nojs attribute support.
         * @since 3.3.5 Make sure href property of links available before fetching the query strings.
         */
        linkFixer : function() {

            if ( thirsty_global_vars.link_fixer_enabled !== 'yes' )
                return;

            var $allLinks = $( 'body a' ),
                hrefs     = [],
                href, linkClass, isShortcode, isImage , key;

            // fetch all links that are thirstylinks
            for ( key = 0; key < $allLinks.length; key++ ) {

                href        = $( $allLinks[ key ] ).attr( 'href' );
                linkClass   = $( $allLinks[ key ] ).attr( 'class' );
                isShortcode = $( $allLinks[ key ] ).data( 'shortcode' );
                isImage     = $( $allLinks[ key ] ).has( 'img' ).length;
                href        = thirstyFunctions.isThirstyLink( href );

                if ( href && ! isShortcode )
                    hrefs.push({ key : key , class : linkClass , href : href , is_image : isImage });

                $( $allLinks[ key ] ).removeAttr( 'data-shortcode' );
            }

            // skip if there are no affiliate links
            if ( hrefs.length < 1 )
                return;

            $.post( thirsty_global_vars.ajax_url , {
                action  : 'ta_link_fixer',
                hrefs   : hrefs,
                post_id : thirsty_global_vars.post_id
            }, function( response ) {

                if ( response.status == 'success' ) {

                    for ( x in response.data ) {

                        // make sure response data is valid before proceeding.
                        if ( typeof response.data[ x ] != 'object' ) continue;

                        var key       = response.data[ x ][ 'key' ],
                            hrefProp  = $( $allLinks[ key ] ).prop( 'href' ),
                            qs        = hrefProp ? hrefProp.split('?')[1] : '', // get the url query strings
                            href      = response.data[ x ][ 'href' ],
                            title     = response.data[ x ][ 'title' ],
                            className = response.data[ x ][ 'class' ],
                            connector;

                        if ( qs && response.data[ x ][ 'pass_qs' ] ) {
                            connector = href.indexOf( '?' ) < 0 ? '?' : '&';
                            href      = href + connector + qs;
                        }

                        // update protocol to replace it with the one used on the site.
                        href = href.replace( 'http:' , window.location.protocol ).replace( 'https:' , window.location.protocol );

                        // add the title if present, if not then remove the attribute entirely.
                        if ( title )
                            $( $allLinks[ key ] ).prop( 'title' , title );
                        else
                            $( $allLinks[ key ] ).removeAttr( 'title' );

                        // if disable_thirstylink_class is set to yes then remove the thirstylink and thirstylinkimg classes.
                        if ( thirsty_global_vars.disable_thirstylink_class == 'yes' )
                            className = className.replace( 'thirstylinkimg' , '' ).replace( 'thirstylink' , '' ).trim();

                        if ( className )
                            $( $allLinks[ key ] ).prop( 'class' , className );
                        else
                            $( $allLinks[ key ] ).removeAttr( 'class' );

                        // map the other attributes.
                        $( $allLinks[ key ] ).prop( 'href' , href )
                          .prop( 'rel' , response.data[ x ][ 'rel' ] )
                          .prop( 'target' , response.data[ x ][ 'target' ] )
                          .attr( 'data-linkid' , response.data[ x ][ 'link_id' ] );

                        // tag links as "nojs" to disable JS redirect for them.
                        if ( thirsty_global_vars.enable_js_redirect === 'yes' )
                            $( $allLinks[ key ] ).attr( 'data-nojs' , response.data[ x ][ 'nojs' ] );

                    }
                }
            }, 'json' );
        }
    }

    var link_prefixes = $.map( thirsty_global_vars.link_prefixes , function(value , index) {
        return [value];
    });

    // Initiate record link click stat function
    thirstyFunctions.recordLinkStatEvents();

    // Initialize uncloak links function
    thirstyFunctions.linkFixer();
});
