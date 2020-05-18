import pygame
import random

# -- ! CHANGE THIS LINE TO MATCH YOUR FILE NAME ! -- 
from simple_scroller import Scroller


# -- ! ADD YOUR COLORS ! -- 
WHITE = (255, 255, 255)
FUCHSIA = (225, 0, 238)
BLACK = (0,0,0)
RED = (255, 0,0)
pygame.init()

SCREEN_WIDTH= 700
SCREEN_HEIGHT = 500
screen = pygame.display.set_mode([SCREEN_WIDTH, SCREEN_HEIGHT])

done = False

clock = pygame.time.Clock()
#variables and classes 
class RunnerSprite(pygame.sprite.Sprite):
    def __init__(self, color, width, height):
        super().__init__()
        self.color = color
        self.width = width
        self.height = height


    def draw_spr(self, x_point, y_point, radius):
        pygame.draw.circle(screen, self.color, (x_point, y_point), radius)


    def draw_danny(self, x_point, y_point):
        pygame.image.load("danny.png")

    def add_spr(self, spr):
        self.all_sprites_list.add(spr)
        self.good_sprites.add(spr)
    
all_sprites_list = pygame.sprite.Group()
good_sprites = pygame.sprite.Group()

ball = RunnerSprite(RED, 10, 10)
x = 350 
x_speed = random.randrange(-10, 10)
y = 250
y_speed = random.randrange(-10, 10)

a = 10 
a_speed = random.randrange(-7, 19)
b = random.randrange(0, 500)


#good_sprites
good = [RunnerSprite(FUCHSIA, 30, 30), RunnerSprite((43, 172, 255), 30, 30), RunnerSprite((65, 234, 226), 30, 30)] 

for g in good: 
    all_sprites_list.add(g)
    good_sprites.add(g)
# blocks_hit_list = pygame.sprite.spritecollide(ball, good, True)

# -- ! MAKE YOUR SCROLLER ! -- 
scroll_front = Scroller(SCREEN_WIDTH, 200, SCREEN_HEIGHT, (222, 158,255), 2)
scroll_middle = Scroller(SCREEN_WIDTH, 400, SCREEN_HEIGHT, (196, 81, 255), 3)
scroll_back = Scroller(SCREEN_WIDTH, 550, SCREEN_HEIGHT, (98, 41, 127), 2)

while not done:
    for event in pygame.event.get(): 
        if event.type == pygame.QUIT: 
            done = True

    x = pygame.mouse.get_pos()[0]
    y = pygame.mouse.get_pos()[1]
                
    # Create Background 
    screen.fill(BLACK)
    # -- ! UPDATE SCROLLER ! -- 
    if pygame.mouse.get_pos()[0] >= 699:
        # print("this works")
        y = pygame.mouse.get_pos()[1]
        x = 0

    if a == 700:
        a = 0

    a = a + a_speed
    # b = b + b_speed   
    #----------Scroller-----------
    scroll_back.draw_buildings(screen)
    scroll_back.move_buildings()
    scroll_middle.draw_buildings(screen)
    scroll_middle.move_buildings()
    scroll_front.draw_buildings(screen)
    scroll_front.move_buildings()

    ball.draw_danny( x, y)
    #--------good sprites--------
    for g in good_sprites:
        g.draw_spr(a,b, 10)
   



    pygame.display.flip()

    clock.tick(60)

pygame.quit()
exit()

