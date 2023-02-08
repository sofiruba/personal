import turtle

# Pantalla
wind = turtle.Screen()
wind.title("Pong by sofi")
wind.bgcolor("black")
wind.setup(width=800, height=600)
wind.tracer(0)

# Puntos
puntos_1 = 0
puntos_2 = 0


# Jugador 1
jug_1 = turtle.Turtle()
jug_1.speed(0) 
jug_1.shape("square")
jug_1.color("white")
jug_1.penup()
jug_1.goto(-350, 0) # Posicion inicial
jug_1.shapesize(stretch_wid=5, stretch_len = 1)

# Jugador 2
jug_2 = turtle.Turtle()
jug_2.speed(0) 
jug_2.shape("square")
jug_2.color("white")
jug_2.penup()
jug_2.goto(350, 0) # Posicion inicial
jug_2.shapesize(stretch_wid=5, stretch_len = 1)


# Pelota 
ball = turtle.Turtle()
ball.speed(0) 
ball.shape("square")
ball.color("white")
ball.penup()
ball.goto(0, 0) # Posicion inicial
ball.dx = 0.5
ball.dy = 0.5

# Marcador
marcador = turtle.Turtle()
marcador.speed(0)
marcador.color("white")
marcador.penup()
marcador.hideturtle()
marcador.goto(0, 260)
marcador.write("Jugador 1: 0  Jugador 2: 0", align="center", font=("Courier", 24, "normal"))

# Funciones (subir, bajar)

def jug_1_subir():
  y = jug_1.ycor()
  y += 20
  jug_1.sety(y)

def jug_2_subir():
  y = jug_2.ycor()
  y += 20
  jug_2.sety(y)

def jug_1_bajar():
  y = jug_1.ycor()
  y -= 20
  jug_1.sety(y)

def jug_2_bajar():
  y = jug_2.ycor()
  y -= 20
  jug_2.sety(y)


# Teclado
wind.listen()
wind.onkeypress(jug_1_subir, "w")
wind.onkeypress(jug_1_bajar, "s")
wind.onkeypress(jug_2_subir, "Up")
wind.onkeypress(jug_2_bajar, "Down")

# Loop principal del juego

while True:
  wind.update()

  # Movimiento de la pelota
  ball.setx(ball.xcor()+ ball.dx) 
  ball.sety(ball.ycor()+ ball.dy) 

  # Bordes
  if ball.ycor() > 290:
    ball.sety(290)
    ball.dy *= -1
  
  if ball.ycor() < -290:
    ball.sety(-290)
    ball.dy *= -1

  if ball.xcor() > 390:
    ball.goto(0,0)
    ball.dx *= -1
    puntos_1 += 1
    marcador.clear()
    marcador.write("Jugador 1: {}  Jugador 2: {}".format(puntos_1, puntos_2), align="center", font=("Courier", 24, "normal"))

  
  if ball.xcor() < -390:
    ball.goto(0,0)
    ball.dx *= -1
    puntos_2 += 1 
    marcador.clear()
    marcador.write("Jugador 1: {}  Jugador 2: {}".format(puntos_1, puntos_2), align="center", font=("Courier", 24, "normal"))


  # Pegar la pelota
  if ball.xcor() > 340 and ball.xcor() < 350 and (ball.ycor() < jug_2.ycor() + 50 and ball.ycor() > jug_2.ycor() - 50):
    ball.setx(340)
    ball.dx *= -1
  
  if ball.xcor() < -340 and ball.xcor() > -350 and (ball.ycor() < jug_1.ycor() + 50 and ball.ycor() > jug_1.ycor() - 50):
    ball.setx(-340)
    ball.dx *= -1