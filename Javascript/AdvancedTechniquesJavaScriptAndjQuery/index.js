//Advanced techniques in JavaScript and jQuery -- Kevin Murray

//4. Using jQuery Deferred Objects
//Using deferred Objects
//Creating a deferred Object
//Dynamic pages
//Deferred mathods
//Negative testing
//LoadSection function
//Deferred Object
//Common pattern
//Loading all content
//Section 1 content
//Layout
//Traditional Ajax Processing
//Promise
//Outline

//3. Advanced Event Handling
//Event parameters
//Custom events
//Delegation
//Namespace
//*Named functions*//
//Use a named functions as the event handler
//-- Easy to remove
//-- Can't be centralized in a library
//-- Updating hanler function has global impact
//Be aware of the order the event handler functions are added and removed
//Be aware of process order assumptions

//*Event handler Methods*//
//Using jQuery Event Handlers
//-- Change shorthand methods to use .on() method
//-- Consolidate event handler functions
//-- Pay attention when using .off() method 

//*Outline*//
//Advanced jQuery Event handling
//-- Attaching events without shorthand methods
//-- Named function
//-- Event Namespaces
//-- Delegation
//-- Custom events
//-- Passing event parameters
//Introduction

//2. Event handling
//*Summary*//
//-- Shorthand methods ultimately reference the .on() method
//-- Events bubble ut the DOM from innermost elements
//-- .bind(), .live() and .on() are othe ways to attach events
//-- .on() ifs preferred attachment method

//No shorthand
//*Events handlers without shorthand methods()*//
//-- .bind(), .unbind(), .live(), .die(), .delegate(), .undelegate(), .on(), .off(), .one()
// .bind('click', function(event)
// {   //Process click event
// })
// .unbind('click')
// .live('click', function(event)
// {   //Process click event
// })
// .die('click')
// .delegate('selector', 'click', function(event)
// {   //Process click event
// })
// .undelegate('selector', 'click', function(event)
// {   //Process click event
// })
// .on('click', function(event)         // .on('click', 'selector', function(event)             
// {   //Process click event            // {   //Process click event
// })                                   // })
// .off('click')
// .one('click', function(event)
// {    //Process click event
// })

//Propagation Events-4.html
//*Events bubble up the DOM until handled*//
//*Ways to cancel event processing*//
//-- Return false from event handler 
//-- Call preventDefault() on the event
//-- Call stopPropagation() on the event
//-- Call stopImmediatePropagation() on the event

//*Mltiple Handlers can be attached for the same event*//
//*jQuery provides methods to determine if the state of the event has been changed*//
//-- .isPropagationStoppped() 
//-- .isImmediatePropagationStoppped()
//-- .isDefaultPrevented()

//More elements Events-3.html
//-- Add clickable to more elements 
//-- Add more event handlers
//-- Predenting default behaviour
//-- Internet explorer id different

//Message function Events-2.html
//--Centralize message hanling
//--Use an object parameter
//--Explicity set what "this" referenences
//Shorthand methods Events-1.html

//**Handling standard events**//
//--Usually use an anonymous function 
//--For common events, shorthand methods can be used 
//----- .blur() .change() .click(), .dbclick(), .focus(), focusin(), focusout()
//----- .hover() .keydown() .keypress(), .keyup(), .load()
//----- .mousedown() .mouseenter() .mouseleave(), .mousemove(), .mouseout(), mouseover(), mouseup()

//Outline
//**jQuery Event Handling**//
//-Create a simple web page for demonstration
//-Attach event handlers using shorthand methods
//-Propagation
//-Browser differences

//1. Introduction
//Default values in an object --> Draw-Version 10.html
//Legacy support with object --> Draw-Version 9.html
//Changing to an object parameter value --> Draw-Version 8.html
//All default values --> Draw-Version 7.html
//Default parameters --> Draw-Version 6.html
//Stub functions --> Draw-Version 5.html
//Draw: six parameters --> Draw-Version 4.html
//Draw: four parameters --> Draw-Version 3.html
//Extending draw : two parameters --> Draw-Version 2.html
//Draw version 1. --> Draw-Version 1.html
//Traditional JavaScript Functions
