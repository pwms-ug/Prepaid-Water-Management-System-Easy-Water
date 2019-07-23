package ug.co.easywater.easywater;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.actions, menu);
        return(super.onCreateOptionsMenu(menu));
    }
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {

        switch (item.getItemId()){
            case R.id.gone:
                // do soomething
                return (true);
            case R.id.help:
                // do something
                return (true);
            case R.id.history:
                // do something
                return (true);
            case R.id.pay:
                // do something
                return (true);
            case R.id.usage:
                // do something
                return (true);
        }



        return (super.onOptionsItemSelected(item));

    }
}
