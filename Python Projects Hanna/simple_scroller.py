import pygame
import random
 


class Building():

    def __init__(self, x_point, y_point, width, height, color):
        self.x_point = x_point
        self.y_point = y_point
        self.width   = width
        self.height  = height
        self.color   = color

    def draw(self, screen):
        pygame.draw.rect(screen, self.color, [self.x_point, self.y_point, self.width, self.height])

    def move(self, speed):
        self.x_point -= speed


class Scroller(object):

    def __init__(self, width, height, base, color, speed):
        self.width  = width
        self.height = height
        self.base = base
        self.color = color
        self.speed = speed
        self.buildings_list = []
        self.add_buildings()

    def add_buildings(self):

        current_width = 0 # How wide the scroller is right now
        while current_width <= self.width:
            self.add_building(current_width)
            current_width += self.buildings_list[-1].width

    def add_building(self, x_location):
  
        building_height = random.randint(10, self.height)
        building_width = random.randint(10, self.width)
        y_location = self.base - building_height # This tells the building where along the y-axis to draw itself
        self.buildings_list.append(Building(x_location, y_location, building_width, building_height, self.color))

    def draw_buildings(self, screen):
        for building in self.buildings_list:
            building.draw(screen)

    def move_buildings(self):
        for building in self.buildings_list:
            building.move(self.speed)

        #gets the x_point of the last building and adds it's width to place the new building right next to it.
        new_building_location = self.buildings_list[-1].x_point + self.buildings_list[-1].width
        self.add_building(new_building_location)

