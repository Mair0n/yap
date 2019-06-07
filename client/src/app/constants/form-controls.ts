import { Validators } from '@angular/forms';

export const animals = {
    name: ['', Validators.required],
    description: ['', Validators.required],
    class: ['', Validators.required],
    type: ['', Validators.required],
    feed: ['', Validators.required],
}

export const animalCard = {
    animal: ['', Validators.required],
    absolut: ['', Validators.required],
    relative: ['', Validators.required],
    expert: ['', Validators.required],  
}

export const animalClass = {
    name: ['', Validators.required],
    description: ['', Validators.required], 
}

export const animalType = {
    name: ['', Validators.required],
    description: ['', Validators.required], 
}

export const feed = {
    name: ['', Validators.required],
    kind: ['', Validators.required],
    composition: ['', Validators.required],
    number: ['', Validators.required],
}

export const license = {
    name: ['', Validators.required],
    animals: ['', Validators.required],
    term: ['', Validators.required],
}

export const controls = {
    'animals': animals,
    'classes': animalClass,
    'types': animalType,
    'feeds': feed,
    'licenses': license,
    'cards': animalCard,
}