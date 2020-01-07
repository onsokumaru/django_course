# tuples, sets, and booleans

#tuples are immutable

# booleans
True
False
0
1

# tuples
t = (1,2,3)
print(t[1])

u = ('a', True, 123.4)
print(u)

# sets are unordered collections of unique elements
x = set()
x.add(1)
x.add(2)
print(x)
x.add(4)
x.add(0.1)
print(x)
x.add(4) # will only accept unique elements
x.add(4)
x.add(4)
print(x)

converted = set([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3])
print(converted)
