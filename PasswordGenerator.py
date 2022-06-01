import random 
words="QWERTYUIOPASDFGHJKLZXCVBNM"
num="1234567890"
char="/;\!@#$&*"
password= random.randint(1,8)
password="".join(random.sample(words+num+char,6))
print(password)