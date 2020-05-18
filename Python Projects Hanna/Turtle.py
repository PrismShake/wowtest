from turtle import *
speed(10)
bgcolor("brown")
pencolor("white")

penup()
goto(-75,150)
pendown()
circle(10)     #eye one

penup()
goto(75,150)
pendown()
circle(10)     #eye two

penup()
goto(0,0)
pendown()
circle(100,90)   #right smile

penup()           
setheading(180) # <-- look West
goto(0,0)
pendown()
circle(-100,90)

penup()
goto(-150, 100)
pendown()
circle(-200)

	
exitonclick()