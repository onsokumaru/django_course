#LISTS

myList = [1,2,3]
mylist = ['string', 1,2,3,4,5.67, True, 'abcde', [1,2,3]]
print(len(myList))

newList = ['a', 'b', 'c', 'd', 'e']
print(newList[0:3])
print("Before reassignment")
print(newList)
newList[0] = 'New Item'
print("after reassignment")
print(newList)

newList = ['a', 'b', 'c', 'd', 'e']
newList.append('New Item')
print(newList)

newList = ['a', 'b', 'c', 'd', 'e']
listTwo = ['x','y','z']
newList.extend(listTwo)
print(newList)

newList.reverse()
print(newList)

x = [43,21,4,1,67,-1]
x.sort()
print(x)

nested = [1,2, ['x','y','z']]
print(nested[2])

print(nested[2][1])
matrix = [[1,2,3], [4,5,6], [7,8,9]]

# list comprehension
first_col = [row[0] for row in matrix]
print(first_col)
