# Einkaufslisten Applikation
## Umsetzung
Die Applikation wurde mittels [React Native + Firebase](https://github.com/invertase/react-native-firebase) umgesetzt. Es wurde eine [Tutorial](https://blog.invertase.io/getting-started-with-cloud-firestore-on-react-native-b338fb6525b9) benutzt, welches eine ToDo Liste erstellt. Das Tutorial wurde auf die Einkaufliste umgeschrieben und gestylet.
## CRUD-Funktionialität
### Hinzufügen von Datensätzen
Das Hinzufügen von Datensätzen wird in der App-Klasse durchgeführt.
```JavaScript
construcot() {
    // Ist die Referenz auf die Kollektion mit den Dokumenten der Einkaufsliste
    this.ref = firebase.firestore().collection('items');
}

addItem() {
    // Mit this.ref.add wird ein Datensatz hinzugefügt
    this.ref.add({
      itemname: this.state.textInput,
      bought: false,
    });
    // Hier wird das Textfeld wieder zurückgesetzt
    this.setState({
      textInput: "",
    });
  }
```
## Veränderung von Datensätzen
Das Verändern von Datensätzen ist in der ShopItem-Klasse durchgeführt worden.
```JavaScript
__toggleItem() {
    // doc ist ein Property von der Klasse ShopItem
    // Mit dem doc kann auf das ref zugegriffen werden
    // Damit kann man update machen und Datensätze verändern
    this.props.doc.ref.update({
        bought: !this.props.bought,
    });
}
```
## Löschen von Datensätzen
Das Löschen von Datensätzen ist auch in der ShopItem-Klasse durchgeführt worden.
```JavaScript
__delItem() {
    // Es wird wieder mit dem doc-Property auf das ref zugegriffen
    // Dann wird nur die delete()-Methode aufgerufen
    this.props.doc.ref.delete();
}
```
## Voraussetzung
* [React Native](https://facebook.github.io/react-native/)
* [Node Package Manager](https://www.npmjs.com)
* [Android Studio](https://developer.android.com/studio/index.html) für einen Emulator
## Installation
1. ``` git clone https://github.com/fscopulovic-tgm/Einkaufsliste_App```
2. ```cd Einkaufsliste_App```
3. ```npm install```
4. Emulator starten
5. ```react-native run-android```
## Installation auf Android Handy
1. Das Handy muss sich im [developer mode](https://www.greenbot.com/article/2457986/android/how-to-enable-developer-options-on-your-android-phone-or-tablet.html) befinden
2. Handy mit dem Computer via USB verbinden
3. ```react-native run-android```
## Probleme mit iOS
Die Implementation mittels iOS wurde nicht umgesetzt. Es gab Probleme bei der Ausführung mit ```react-native run-ios```. Die Applikation konnte nicht gebuildet werden.