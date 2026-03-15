# Introducing hooks

## Transcript

In this video, we're going to take a look at hooks.

These allow you to run commands before or after Claude

attempts to run a tool. Hooks can be used to implement

really interesting and very useful functionality.

For example, after Claude decides to write a file,

you can automatically run a code formatter on

the created file, or you can run tests after

a file is edited, or you can block Claude

from reading particular files. The possibilities

are really endless, and I've got a couple of good

examples lined up to show you some ideas of

how you might use hooks on your particular project.

First, however, let me help you understand exactly how

hooks work. As a reminder, when you ask Claude

code something, your query is sent off to the Claude model

along with some tool definitions. The Claude model

might then decide to run a tool by providing a carefully

formatted response. And at that point,

it is up to Claude code to run the requested tool, maybe

in this case to read a file, and then respond with the result

of that tool call. Now hooks give

us the ability to execute code just before

or just after the tool execution.

Hooks that run before a tool are referred to as

pre-tool use hooks because they run before

the tool. And hooks that run after the tool are

referred to as post-tool use for the same reason.

To define hooks, we add configuration to the Claude

Settings file. Remember that there are several different

settings files, one for global use across all

projects on your machine, one for your particular project

that gets shared with other engineers, and one for just you

on a particular project. You can add hooks,

either by writing them out by hand, inside

this file, or by using the built-in slash hooks

command inside of Claude Code itself. The

configuration itself looks like what you see on

the right-hand side of the screen. Let me walk you through this example

file just to give you a better idea of what's going

on. So first, notice that there are two

distinct sections inside of this file. One

section lists out all the commands that should be executed before

a tool use. Remember, those are referred to as pre-tool

use hooks. The other section lists out all the different

commands that should be executed after a tool

use. And again, those are post-tool use hooks.

In each of these sections, we provide a matcher. This

indicates which tool use types we are looking for.

So in this case, I want to find uses of the read

tool. Whenever Claude Code attempts to read

a file, I want to run the command you see listed

there. Likewise, inside the post tool

use section, after a use of the write, edit,

or multi-edit tools, there's a different command

that I want to run. Now, here's the important part.

Here's what hooks are really intended to do. Those

commands you saw will be given details about the tool call

that Claude wants to run. In the case of a

pre-tool use hook, you can inspect what

Claude wants to do. And if for any reason

you don't want to allow it, you can block the tool use operation

and send an error message back to Claude. In

the case of a post tool use hook, the tool call

has already occurred, so it's too late to block it. But

you can do some follow-up operation based upon the tool

call, like maybe format a file that was just edited.

You can also provide some message back to Claude about

that tool use. For example, you might decide to

run a separate program to check the code quality

of the edit, or maybe do a type check,

and then provide that feedback back to Claude. Claude

might then take that feedback and make an update

to the file that it just wrote to. If you're still

confused about hooks or what they are intended to do, that

is absolutely okay. Wrapping your head around hooks

can be really challenging. So let's come back in a moment

and work on a sample project with hooks.
