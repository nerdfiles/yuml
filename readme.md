# YUML

http://yuml.me and `yuml-diagram` used to generate examples of various 
high-level diagrams and design patterns. One example is a REST-sequence 
diagram.

## Install

1. Clone repo
2. `$ npm isntall`

## Usage
    
    $ npm run gen ./examples/{INPUT}.yuml ./{OUTPUT}.svg

## Goal

My main goal with this repo is to enable a yaml2yuml2yed2kingly (like, uh, 
presentation to docker with yuml embedded to yed to kingly to code) workflow 
such that textual forms can be crafted in YUML syntax and then used to generate yEd 
state diagrams to ported to Kingly, ultimately determining normative code 
matter in a Yeoman-ish like way (but, like, from text files, as a presumed 
normative format for generating code not weird ass templates).
