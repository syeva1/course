# Adding context

## Transcript

I've got my code editor open inside that small project,

and I'm going to start up the development server with a NPM run

dev. And when I run that, I'm going to be able to

navigate to a local host 3000 inside my browser

and see the application running. So here it is right here. We

are going to use Claude to do a little bit of work on this project.

But first, there's something really critical I want you to understand around

using Claude. Specifically, I want you to walk away

from this course with a strong understanding of context management.

You see, inside of your typical project, there might be dozens or

hundreds of files, each with a tremendous amount

of information. Whenever we ask Claude a question

or give it a task, there is some ideal amount of

information that Claude needs. Just enough

to help to understand how to answer your question or complete your task.

As soon as we start adding in additional information that's

not relevant, Claude's effectiveness will start

to decrease. So it is really important for us to

help guide Claude towards relevant files or

documentation inside of our project. Claude code can

certainly work without any handholding, but you'll get the best

results if you provide just a little bit of guidance.

So for the remainder of this video, I'm going to give you a bunch of different tips

on how to give Claude the best context possible. To

get started, inside my editor, I've opened up my terminal, and

I'm going to start Claude Code up by running the Claude

command. Whenever you run Claude Code

in a project for the first time, I highly recommend running

the slash init command. This gets

Claude to take a deep look at your entire code base. It'll

figure out the purpose of the project, the general architecture,

relevant commands, critical files, and so on. After

this search, it'll summarize its findings and place them

into a file called Claude.md.

When Claude tries to create this file, it will ask for permission.

You can either hit Enter to accept, or if you don't

want to have to grant permission to every file write request,

you can also press Shift Tab, which will allow

Claude Code to freely write files in your project.

I would encourage you to open up the Claude MD file that was generated

and take a look at its contents. As I mentioned, the

contents of this file are included in every request we make off

the Claude. This file really has two different purposes.

First, it helps Claude better understand your codebase so

it can find relevant code more quickly. And second, it

serves as a location where you can give Claude some general

guidance. Just so you know, there are multiple

Claude MD files that Claude Code will make use of. There

is a project level, a local level, and a machine

level. The project level is what we just generated

by running the slash init command. We are generally

going to commit this file to source control, like Git. We're

going to share this file with other engineers and just have some project

specific directions that we want to hand off to Claude. Optionally,

we can also create a Claude local MD file.

This file is not going to be committed and you're generally not going

to share with any other engineers. Inside this file,

you might put in some personal instructions that you want

Claude to follow just for you. Finally,

you can have a global Claude MD file on your machine.

This file will contain instructions or be applied to all

projects that you run locally. Now, I

keep on mentioning giving Claude special or custom instructions.

So let me show you an example of that. Let's imagine that

Claude is using comments way too often in the code that it writes.

We can address this by updating our Claude MD file.

We can either manually modify the file or a little

bit of a shortcut is inside of Claude Code we

could put in a pound sign. This puts us in

memory mode. This allows us to edit one of our

Claude MD files intelligently. So we can put

in a request like, don't write comments so often. I'll

then specify that I want to add this instruction to the project

Claude MD file, and Claude is then going to merge

this instruction into that file intelligently. If

I then open the file up and do a search, I'll see that in

fact, yes, it did add in that new instruction.

Now that we've created our Claude MD file, I want to give you a

better understanding of how to pull in specific context

into a conversation. Let's imagine that we want to better

understand how the authentication system in this project works.

We could just ask Claude to tell us about it, in which case, we would

search over our codebase and find files relevant

to the authentication system. That would definitely work, but

it would just take some amount of time. Alternatively,

if we already know some files that are relevant for

the authentication system, we could mention them using

the ATT character. When we mention a file,

it will be automatically included inside of our request off to

Claude. This is an excellent technique for

pointing Claude in a specific direction. You

can use the same syntax to also mention files

inside of Claude MD. Let me show you an example of

why that is really useful. inside of the Prisma

folder of this project, there's a file called schema.prisma.

This file contains a complete definition of all the different

tables and types of records that exist inside the SQLite

database that is used to store information inside this project.

Because this information is so important and relevant

to so many aspects of this project, I might decide

to mention this file inside of my Claude MD

file. Let me show you how I do that. First,

I'll enter a pound to enter memory mode. I'll then

mention that schema file, and specifically, tell Claude

to reference that file any time it needs to better understand

the structure of data inside the database. Once

the update is complete, I'm going to take a look at the Claude MD file

and just verify that the note was added. When you mention

a file like this, its contents are automatically included

inside of your request. So if I ask what attributes

the user has, Claude can immediately answer without

reading the schema file.
