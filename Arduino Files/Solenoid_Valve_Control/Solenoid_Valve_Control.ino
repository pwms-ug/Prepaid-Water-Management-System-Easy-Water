int SolenoidPin = 10;

void setup() {
  Serial.begin(9600);
  pinMode(SolenoidPin, OUTPUT);  
}

void loop() {
  digitalWrite(SolenoidPin, HIGH);
  Serial.println("Valve Closed");
  delay(5000);
  digitalWrite(SolenoidPin, LOW);
  Serial.println("Valve Open");
  delay(5000);
}
