# Useful hooks!

## Transcript

In this video, I'd like to show you some really useful

hooks that you might want to use on your own projects. These

hooks are intended to address some common weak points

in Claude Code. To help you understand how the first one

works, let me give you a quick demonstration of a problem

that Claude Code sometimes runs into, especially

on larger projects. So inside the SRC

directory, I'm going to find schema.ts.

Inside of here, there's just one single function called create

schema. This function is called from the main.ts

file, specifically right here. Now,

I'm going to go back to the schema.ts file and I'm going to update

the function definition. I'm going to say that if you

ever want to call this function, you must also pass

in a verbose argument that must be of

type Boolean. Now, as soon as I add in this change,

if I go back to the main.ts file, I'm going to get a

type of error because I just updated the definition of

this function, but I have not actually added in

a value for verbose. So the error

right here says specifically argument for verbose

was not provided. Now, I'm

going to undo that change very quickly. I'm going to

close the main.ts file. I'm then going to open

up Claude Code and ask it to make the exact same

change. Now if I run this, Claude Code is

going to have absolutely no issue making this edit whatsoever. But

it's going to update this file and then unfortunately after

making that change, so there's the new verbose true right

there. Unfortunately, Claude won't go around the project

and try to find where that function is actually called and try to

update any of the different call sites. So if I now open

up main.ts, we'll see that we do, in fact, have

an error over here. And Claude didn't really catch this,

unfortunately. So the first hook that I want to show you

will fix this solution super easily.

In case you're not familiar with TypeScript, and if you're not, that's totally

fine. If I close out of Claude Code and run the

command, TSC-dash-noemit,

that's going to run a type check on my entire project. And

in this type check, we can see that the error is very

evident right here. So it's complaining about our call

to create schema from that main.ts file.

So my idea for a hook is really simple. I

think that any time that we edit a TypeScript file,

we should run the TypeScript type checker and see

if there are any distinct errors. If there are,

we should attempt to feed these errors back into Claude

immediately inside of a post-tool use hook.

And hopefully, this will give Claude a signal and tell it that there

is a type error that it just introduced, that

it probably needs to go and fix somewhere else inside of our project.

Now, I already put this hook together for us, fortunately, just

to save us a little bit of time inside the hooks,

TSC.js file. So inside this file,

I've got a bunch of logic put together to run the TypeScript type checker,

take any errors that found, and pass them back into

Claude. At present, I disabled

this hook just so I can give you that demonstration you just saw. So

I disabled it by adding the process exit 0 right there.

I'm going to delete that. And now this hook should be working AOK.

So if I now go back to the schema.ts

file, Remove that verbose flag, restart

Claude Code, and ask it to make

the same change once again. It

will make the change. And then hopefully this time, it will immediately

get that feedback from the TypeScript type checker saying,

hey, you've got an error somewhere else in the project that you've just introduced.

And hopefully, Claude will go and fix it. So we can

see right here, there's the edit that was made. We got

some edit operation feedback from the hook that we put together.

So it found an issue inside of one of our different files.

And Claude is now saying, OK, I understand. I introduced

an error. I need to fix the call to create

schema inside of main.ts.

And then the next update it makes is going to attempt to go into

that file and update that function call to

add in that missing argument. So this is

a hook that you might want to try implementing on your own personal

projects. Now, even though this hook was implemented

specifically for TypeScript, it still works for any

other kind of typed language where you can run a type

checker very easily. Even if you're using an untyped

language, you might even implement the same idea of functionality

using tests instead of running a type checker. So

every time an edit is made, you could run your test to make

sure that the edit is OK. Now, the next

hook that I would like to show you is a little bit more challenging

to explain, but once you get the idea behind it, I think

that you will definitely find this next one really

helpful, particularly in larger projects. To

help you understand this other hook, I want to give you a little bit of background

on this project. Inside of the SRC query

directory, there are many different files. Each

of these different files contains many different SQL queries

written inside of different functions. Inside

of the orderqueries.ts file in particular,

I want to point out that there is a function inside of here called

git pending orders. This query goes through

a database that contains some e-commerce related

data. And in theory, it's going to find all the different

orders that have been created that are in a pending state.

So just keep that function in mind for a moment. Okay,

so I'm going to show you a couple of good diagrams really quickly to help you understand

a common problem that starts to arise inside of larger

projects. So in this diagram, I've got my

list of different query files on the left-hand side, and as we saw,

each of those different query files contains many different queries.

Inside of that order queries file in particular is the

git pending orders function. So we've already got

a query put together that will attempt to find some

different pending orders. Now, if I go

to Claude and ask it to update the main.ts

file to print out all the different orders that have been

in a pending state for longer than three days, in

a perfect world, Claude would find the order

queries.ts file. It would find that existing query

and it would make use of it as opposed to writing

out a brand new query. So that's what we want.

And we'll see that if we make use of Claude right now and ask

it to do exactly that, We're going to get

exactly the result we want. So I'm going to ask Claude in the main.ts

file, print out orders that have been pending. Now,

to Claude's credit, it is going to take a look at the

different query files that exist. It's going to find the order queries

file. And then inside there, it's going to recognize that there

is already a query called get pending orders. And

it's going to attempt to use that function as opposed

to creating a new query. We didn't want a new

query. We wanted Claude to use the existing

function. So when we gave Claude a very focused

and directed task, it was able to understand that,

yeah, I probably shouldn't write a new query. It should at least

take a look at some of the ones that already exist. And that was definitely

good. Now I'm going to give Claude a little bit

of a curve ball. I'm going to purposefully make this task

a little bit more difficult. First, I'm going to run slash

clear to clear out all the context that we've gained. Then,

I'd like you to take a look at the task.md file.

Inside this file, I put together a prompt that is still going to

ask Claude to find orders that have been pending for a while,

but I've also wrapped it up in some larger project.

I'm asking Claude to write out a Slack integration

that's going to message a specific channel once

a day with all the different orders that have been pending for too

long. So in this scenario, we still want to find orders

of been pending for too long, but now I've wrapped it inside

this larger task. And if I take this

task and then feed it into Claude,

again, after doing that slash clear operation, we're

going to see that this time around, unfortunately, it's

not going to stay quite as focused, and it's going to end up

trying to write out a brand new Git pending

orders query, which is, again, not what we want,

because that would be a duplicating code throughout our project.

If I let this run for a bit, I will eventually see that, yes,

it does, in fact, make a brand new query called Git

orders pending too long. So this is

an example of where a Claude kind of lost focus and

decided to write a brand new query as opposed to reusing

an existing one. Again, we've got some duplicate code

here, which is probably not what we want. In

addition, it didn't only create the new query, it also

created a brand new file, which is also probably something we don't

want. We'd probably want this order-related query to

be added to the order queries file. So

now that we understand the issue here, let me show you how we could fix this potentially

by making use of a hook. All right, so

whenever Claude attempts to write, edit, or

use the multi-edit tool to modify something inside

the queries directory specifically, I'm going to

run the following hook. First, inside this hook, I'm

going to launch a brand new separate copy of

Claude Code. I'm going to ask this new copy

to take a look at the change that was just made and take

a look at some of the existing code inside the queries directory and

see if a similar query is already inside there.

Then if there is an existing query, then

I'm going to take that feedback and send it back to the original

copy of Claude and I'm going to ask Claude to maybe

decide to fix the situation. So remove the added

query and make use of the one that already exists. So

this is going to allow us to make sure that the queries folder generally

stays clean and doesn't have a bunch of duplicate code

inside of it. So let me show you how this would work

in action. First, I'm going to flip back over here.

I'm going to delete the brand new order alerts.

queries.ts file that was made and

the slack.ts file that was made as well. Then

I'm going to find inside the hooks directory the query hook

file. So I already put this hook together for us. Right

now it is currently disabled because I got a process.exit

at the very top. So let's walk through this hook

really quickly. First, I'm going to tell this thing that

it's only going to review changes to the SRC queries

directory. Then, a little bit lower, I'm going to check

and see if the change that was just made was made to the queries

directory. After that, I've then got a long

prompt here that is asking Claude to do a review

on the change that was just made. And then after that is

where I'm launching Claude Code programmatically. Specifically,

these lines right here. This is making

use of the Claude Code TypeScript SDK. I can

give you a lot more information on it in just a little bit. For right

now, just understand that this right here is essentially the same

as us making use of Claude Code at the terminal.

Once Claude Code runs, and I get a response back out of it, I

check and see if Claude decides that, yeah, the changes look

okay, or maybe we've got a duplicate query. And

if we do, then we're going to exit early with an exit code

of two, which is going to give this feedback back

to Claude and hopefully tell it that it needs to make a change.

So now that I've got this additional hook put together

and enabled by removing that process exit zero at the

top, I'm going to again restart Claude Code and

then run the same query again. And hopefully

this time it might initially put in

that duplicate query, but then our hook right here is going to

run and hopefully tell it, hey, we don't want that duplicate code.

You should make use of some already existing query to

implement this functionality. Now, Claude Code

is once again going to attempt to create a brand new, completely

separate query file, not making use of the old

query that already existed. When it tries to create that

file, however, our hook is going to run. It's

going to launch that separate copy of Claude Code, which is going to do

some research and find that there is, in fact, an existing

query that can be reused. It's going to provide

some advice and say, hey, you could probably go and update this

other existing query to suit your purposes perfectly.

And we'll see some feedback from Claude, our primary instance that

we are interacting with saying, ah, yes, there is

this existing query. Let's just modify

that existing query rather than attempting to

write out a brand new one. Now the downside

to this hook is that it's going to take some additional time and

expense to run every single time that I want to edit something

inside the queries directory. But the upside is that

I'm going to end up with a lot less duplicate code inside

of my queries directory. So it really comes down to a set of trade-offs

for you deciding whether or not you want to implement something like this in your

own project. If you do, I would at least recommend

doing what I showed you inside of the query hook.

So this one right here, and only watching maybe a handful

of directories like really important folders inside of your project,

just to minimize the amount of extra work that is being

done.
