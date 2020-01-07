# DICTIONARIES

my_stuff = {"key1":"value","key2":"value2"}
print(my_stuff['key2'])

my_stuff = {"key1":"value","key2":"value2","key3":{'123':[1,2,'grabMe']}}
print(my_stuff)

print(my_stuff['key3']['123'][2])

print(my_stuff['key3']['123'][2].upper())

new_stuff = {"lunch":"pizza","bfast":"eggs"}
print(new_stuff['lunch'])
new_stuff["lunch"] = "burger"
print(new_stuff['lunch'])
new_stuff["dinner"] = "pasta"
print(new_stuff['dinner'])
