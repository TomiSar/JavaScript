//Advanced techniques in JavaScript and jQuery -- Kevin Murray

//4. Using jQuery Deferred Objects
//*Using deferred Objects*//
//*Creating a deferred Object*//
//*Dynamic pages*//
//*Deferred mathods*//
//*Negative testing*//
//*LoadSection function*//
//*Deferred Object*//
//*Common pattern*//
//*Loading all content*//
//*Section 1 content*//
//Loading Dynamic Content
//Using jQuery "load" method appears to work
//-- Content loads
//-- "Proceed" button is enabled with a callback function

//*Layout*//
//Loading dynamic content
//Requirements:
//-- Load into three <DIV>elements- asynchronously
//-- When all content is loaded, enable another element
//-- Only load content when user clicks the "Load" button

//*Traditional Ajax Processing*//
//$.get('somefile.html', function(result)
//{     //This is a callback function
//      //Process the result - and set some
//      //Flag to indicate completion
//}     
//-- Few developers capture the result of the $.get function call
//-- The callback is used to trigger further processing upon completion
//-- Gets problematic if multiple processes need to be executed

//*Promise*//
//jQuery Deferred processing
//Implements the JavasScript promise
//AJAX calls
//-- Open a connection to an external source
//-- Begin transfer of the resource 
//-- Upon completion, execute success or failure callbacks
//-- Resolve or reject a promise
//Many developers just pass success or failure callback functions
//The returned promise is mostly ignored

//*Outline*//
//jQuery Deferred Object
//Grouping provides an alternate to callbacks for asychronous processing - Deferred
//Deferred allows:
//-- Grouping multiple asynchronous processes
//-- Attaching multiple success and failure handlers
//-- Postpone logic flow until all asynchronous prosesses complete - in any order
//-- Integration of AJAX and custom functions into asynchronous processing

//*Introduction*//
//Traditional JavaScript functions
//-- Positional parameters
//-- Handling default values
//-- Object parameters

//3. Advanced Event Handling
//*Summary*//
//-- .off() method can remove more than we attached
//-- Event handlers can be associated with specific eventm namespaces for easier managemenet and removal
//-- Delegation is a good way to reduce number of attached event handlers
//-- Custom events are processed in the same manner as system events 
//-- Additional data can be passed to an event handler for either a custom event or system event

//*Event parameters*//
//-- Additional data can be passed through evnet handler functions
//-- Include data in jQuery .trigger() method
//-- Include data in jQuery .on() method
//-- Parameter type should be array or object

//*Custom events*//
//-- Create new events for DOM elements
//-- Create events for regular objects
//-- Initiate custom event with trigger

//*Delegation*//
//Bind event handlers higher to DOM
//-- Effifiency
//-- Centralized processing
//-- <ul> = unsorted list, <li> = list item example of list below
{/* <ul> List header
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
    <li>List item 4</li>
</ul> */}

//-- .bind(), .unbind(), .live(), .die(), .delegate(), .undelegate(), .on(), .off(), .one()
//.$('li').bind('click', function(event)
// {    //Process click event
// })
//.$('li').on('click', 'li',
//function(event)
// {    //Process click event
// })

//*Namespace*//
//Event Namespace//
//Namespace
//-- Allows grouping of events
//-- Provides ability to narrowly target removal of event handlers
//-- Multiple namespaces can be included
//-- Namespaces are not hierarchial 

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