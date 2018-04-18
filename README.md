# Einkaufslisten Applikation
## Umsetzung
Die Applikation wurde mittels [React Native + Firebase](https://github.com/invertase/react-native-firebase) umgesetzt. Es wurde eine [Tutorial](https://blog.invertase.io/getting-started-with-cloud-firestore-on-react-native-b338fb6525b9) benutzt, welches eine ToDo Liste erstellt. Das Tutorial wurde auf die Einkaufliste umgeschrieben und gestylet.
## Verbindung mit Firebase
```react-native-firebase``` bietet dem Entwickler ein [vorgegebenes Projekt mit einer Installationsanleitung](https://github.com/invertase/react-native-firebase-starter). Hierbei werden alle Schritte zum Aufsetzen der Applikation beschrieben.
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
  
render() {
    // Hier wird bei einem Klick (onPress) die addItem()-Methode aufgerufen
    return (
        ...
        <Button
          style={styles.button}
          title={'Add shop item'}
          disabled={!this.state.textInput.length}
          onPress={() => this.addItem()}
        />
    );
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
## Zuweisung von Veränderung und Löschen von Datensätzen
Eine TouchableOpacity wurde verwendet um Datensätze zu verändern beziehungsweise zu löschen. Hierbei wird beim kurzen Tippen die Veränderung durchgeführt. Bei einem langen Draufdrücken wird der Datensatz gelöscht.
```JavaScript
render() {
    ...
    return (
        <TouchableOpacity
            onPress={() => this.__toggleItem()}
            onLongPress={() => this.__delItem()}
            style={styles.listItem && styling}
          >
          ...
    );
}
```
## Probleme mit dem Layout
Das Layout der Items in der Liste konnte nicht wie gewollt gestaltet werden, weshalb die Items in der Liste nicht gut aussehen. Dies wirkt sich jedoch nicht auf die Funktionalität der Applikation auf.
## Voraussetzung für die Installation
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