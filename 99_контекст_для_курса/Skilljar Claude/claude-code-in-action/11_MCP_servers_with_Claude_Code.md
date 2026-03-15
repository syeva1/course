# MCP servers with Claude Code

## Transcript

You can add new tools and capabilities to Claude Code

through the use of MCP servers. These

MCP servers either run remotely or locally

on your machine. A very popular MCP

server named Playwright gives Claude Code the

ability to control a browser. Let me show you how to

add it to Claude Code, and then we'll use it to develop

our app a little bit more. To install the server at

your terminal, not inside of Claude Code, we'll execute

Claude MCP Add. And then a name

for this MCP server, I'm going to name it playwright. And

then after the name, we'll add in a command that will start up

the server locally on your machine. We can then start

Claude Code and ask it to open a browser and navigate

to our application at localhost 3000.

Before the browser opens, you might notice that you are required to give

permission for that tool to run. If you get tired

of all those permission pop-ups, you can open up the Claude

directory inside their settings.local.json.

And then inside of the allow array, you can add in a

string of MCP underscore underscore,

notice there are two underscores there, playwright. This

allows Claude Code to make use of this MCP server and

the tools inside of it in any way it wants without requiring

you to provide permission every time. If I restart

Claude Code and then ask it to open a browser again,

it will do so without requiring me to give permission. There

are incredible number of ways that you can use the Playwright MCP

server. Let me show you one that would be really applicable to the

project we are working on right now. Back inside

my editor, I'm going to find the SRC, Lib, prompts,

generation.tsx file. This is the prompt

that is used to actually generate the components that you ask

for inside of our app. So I want to allow

Claude Code to make use of the browser, generate

a component on its own, and then tweak this prompt

on its own based upon the generated component. And

hopefully, we'll end up with some better looking components

being generated out of our app. So let me show you how

we would do that. Back inside of Claude Code, I'm going to ask

it to navigate to localos3000.

attempt to generate a component, take a look at the

generated source code and evaluate the styling, and

then update our prompt inside that generation.tsx

file, and hopefully we'll end up with some at

the end of the day better styling on our generated components.

So let's see how it does. Claude is going to first open

up the browser. It's going to attempt to generate a component.

And looking at some of the commentary from Claude here, it looks like

it's not quite so happy. You might actually notice

that it complains about a very common style that's used in

applications like this, a purple to blue kind

of gradient. Claude is then going to update

our prompt and then try to generate a new component.

And I'll be honest with you, this actually gave

a much better result than I ever expected. This

testimonial card actually looks really, really great. Based

on these results alone, you can immediately get a sense that

MCP servers really open the door to a lot of interesting

use cases. And I highly recommend you look into some

MCP servers that might aid Claude in developing

whatever kind of project you personally are working on.
