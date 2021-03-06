### React CLDR Locale Exercise Problem

#### Installation

1. Clone the repository
    ```
    $ git clone git@github.com:mariesajan/react-cldr-locale.git
    ```
    
2. Install dependencies
   ```
   $ npm install
   ```

3. Run
   ```
   $ npm start
   ```

4. Open the browser at [http://localhost:3000](http://localhost:3000)

#### Demo on Heroku
[Demo](https://react-cldr-locale.herokuapp.com/)

#### Requirements
Using React.js and Node.js, create a Single Page Application that will return the values for a property for each locale

* Input : property name

* Output : list of all locales for which the property exists, and the corresponding value

* Suggest a good UI format to show the data

#### Additional features
* Option to dedupe the data - show all countries with the same property value

* Option to add a new column (ie, show data for a new property)

* Option to delete a column (ie hide/delete the data for a property)

#### Source for data - CLDR
To make it simple, use the values from delimeters.json which is found under
https://github.com/unicode-cldr/cldr-misc-full/blob/master/main (under /delimeters.json)

For example,

https://github.com/unicode-cldr/cldr-misc-full/blob/master/main/de/delimiters.json
https://github.com/unicode-cldr/cldr-misc-full/blob/master/main/fr/delimiters.json
https://github.com/unicode-cldr/cldr-misc-full/blob/master/main/it/delimiters.json

#### Sample behavior

* Input = "quotationStart",
Output = de = "„", fr = "«", it = "«", etc

* Input = "quotationEnd", Output = de = "“", fr = "»", it = "»", etc
