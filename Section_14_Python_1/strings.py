# STRINGS

#INDEXING
mystring = 'abcdefg'
print(mystring[-1])

#SLICING

print(mystring[4:])

print(mystring[:3])

print(mystring[2:5])

print(mystring[::2])

#Basic Methods
x = mystring.upper()
print(x)

x = mystring.lower()
print(x)

x = mystring.capitalize()
print(x)

mystring = "Hello World"
x = mystring.split()
print(x)

#print formatting
print("Insert another string here: {}".format("INSERT ME"))

print("Item One: {} Item Two: {}".format("dog", "cat"))

print("Item One: {n} Item Two: {m}".format(m = "dog", n = "cat"))

a = "first insert"
b = "second insert"
print (f"Insert two strings, string 1: {a} and string 2: {b}")
