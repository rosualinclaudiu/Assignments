În cadrul documentului HTML, trebuie să scrieţi un cod JavaScript care va executa următoarele:

în timpul transmiterii formularului, trebuie preluate valorile pe care utilizatorul le-a introdus în câmpurile pentru numele de utilizator şi parolă;
apoi, trebuie verificate valorile inserate de utilizator; numele de utilizator corect inserat este new_user, iar parola corectă ar fi 123456789;
dacă utilizatorul a inserat date incorecte, acest lucru trebuie notificat pe pagină în următoarele moduri:
cadrul câmpului nevalid trebuie colorat cu roşu,
la sfârşitul câmpului input nevalid trebuie setată o iconiţă de culoare roşie care va indica faptul că acest câmp nu este valid,
toate erorile trebuie listate, cumulativ, pe pagină, sub formular,
dacă utilizatorul a inserat date valide, acest lucru trebuie notificat pe pagină în următoarele moduri:

cadrele elementelor input valide pentru inserarea datelor trebuie colorate cu verde,
la sfârşitul câmpului input valid trebuie setată o iconiţă de culoare verde care va indica validitatea câmpului,
sub formular trebuie listat mesajul Successful login!

Inserarea nevalidă se obţine în două moduri:

când utilizatorul introduce valoarea care nu se potriveşte cu datele de acces specificate mai sus,
când utilizatorul nu introduce nicio valoare.

Când utilizatorul nu introduce numele de utilizator sau introduce un nume eronat, acest lucru trebuie prezentat cu ajutorul următoarelor mesaje:

please enter username
please enter a valid username
Când parola nu este introdusă, sau este introdusă o parolă eronată, trebuie afişate următoarele mesaje:

please enter password
please enter a valid password
Pentru afişarea iconiţelor la sfârşitul elementelor input, folosiţi una dintre bibliotecile cu iconiţe vectoriale - Google Material Design Icons sau Font Awesome. Pentru rezolvarea acestui assignment puteţi folosi şi jQuery, dar nu este obligatoriu. Aşadar, decideţi singuri dacă veţi scrie un JavaScript curat sau JavaScript folosind jQuery.
