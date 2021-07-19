# MARHARYTA RAMANENKA
***
### Contact information:
Phone : +375(29)7501428\
Email: margoroma2010@gmail.com\
Skype: margoroma\
Linkedin: [Margarita Romanenko](www.linkedin.com/in/margarita-romanenko-087787132)
                
***
### Summary
Python developer junior, Django Framework. More than 10 years of experience in mechanical engineering (engineering calculations in software like ANSYS Workbench and MSC ADAMS).

### Skills
 - Python
 - Django
 - HTML5
 - CSS3 
 - Git 

### Code examples
*Find the divisors! (Python)*
```
def divisors(integer):
    l = []
    for i in range(2, integer-1):
        if integer % i == 0:
            k = i
            l.append(k)
            a = l
    if len(l) == 0:
        a = (f'{integer} is prime')
    return a    
```
*The first function to find a nested priority expression (Python)*
```
def recurs(st):
    st = st.replace(" ","")
    if '(' not in st:
        return st
    else:
        a = st.rfind('(')
        n = len(st[:a])+st[a:].find(')')
        st1 = st[a+1:n]
        res = operat(st1)
        st = st.replace(st[a:n+1],str(res))
        st = check(st)
        return recurs(st)
```

More code examples on *[Github](https://github.com/margoroma)* and *[Codewars](https://www.codewars.com/users/margoroma)*.

### Education
*June - July 2021 Diving in Python by Coursera (on-line course)*

*March 2021 - June 2021 – Educational Center of HTP*\
Course: Comprehensive course on web development in Python \
Project: Development of a site in Django Framework: A system for testing student's knowledge with differentiated accessto creating and controlling tests for teachers and passing for students.

*March 2018 - August 2018 – Universidad Tecnica Federico Santa Maria*\
Specialization: Electrical and Electronics Engineering (postgraduate student)

*2004-2009 – Belarusian National Technical University*\
Specialization: Automotive Engineering 

### English level
A2+/B1
