# Github integration

## Transcript

Claude code has an official GitHub integration that

allows Claude code to run inside of a GitHub action.

You can set up this integration by running slash install

GitHub app. This will walk you through a couple of steps.

First, you'll need to install the Claude code app on GitHub.

Next, you'll need to add in an API key. And then

after this, a pull request will be automatically generated.

This pull request adds in two different GitHub actions.

The first action adds in mentioning support. So

from an issue or a pull request, you can mention Claude

with @Claude and give Claude some kind of task

to run. The second action adds in support

for reviewing pull requests. So whenever you create a pull request,

Claude code will automatically run and review the proposed

changes. Both of these actions can be customized,

and you can also add in additional actions to trigger based

on other types of events. Let me show you how you

can customize the mentioning feature. First, we

just merged in those two action config files to

our repository on GitHub. So I need to pull

those changes down to my local machine. Then inside

of the newly created GitHub workflows directory, I'll

see these two action config files. One adds

in support for the pull request review, and the other adds

in support for handling mentions. Now, here's how

I want to customize the mention functionality. Whenever

I mention Claude inside of an issue or a pull request,

I wanted to be able to run the project and use the Playwright

MCP server to access the app inside

of a web browser, all inside of a GitHub action.

To make this work, I'll first add in a step before

Claude code runs in this workflow. I'll run

the setup command and then start the development server up.

Then I'm going to update the Claude code configuration. I'll

add in some custom instructions. These are passed directly

to Claude and they allow us to provide some additional

directions or context. In this case, I'll

tell Claude that the development server is already running and

that I can use the Playwright MCP server to access

the app in the browser if needed. Then I

will add in some configuration to set up the Playwright MCP

server itself. There is one other thing to be aware

of here. When you're running Claude Code inside of an action,

we have to specifically list out all the permissions that

we want to grant Claude Code. And there's one tricky

aspect to this. If you're using an MCP

server, you have to individually list out each

tool from each MCP server that you want

to allow. There is no shortcut for permissions

like we saw previously. Unfortunately, the Playwright

MCP server has many different tools, so they each

need to be listed out. Once I've finished with

this configuration update, I'll be sure to commit these changes and

push them. Now it's time to test out this updated

workflow. I'm going to give Claude a little task.

In our actual app, see these two buttons up here. Right

now they work fine. I can toggle between the preview and the code

panels without issue. But I'm going to pretend as though

they weren't working as intended. I'm going to take a

screenshot with that button right there. I'm going to make an

issue. I'm going to paste in the screenshots. And I'm

going to mention Claude with @Claude and ask it

to verify that the two buttons are working as intended.

I'll then create the issue and wait. Now, it is

going to take a minute or two for the action to actually start up

and for Claude's response. Remember, as we just saw in

the action, we are now setting up the entire app and

starting it running before Claude Code even starts to

run at all. But eventually, Claude

will respond. It will very often create a checklist

of steps to accomplish the given task. In this case,

it is going to attempt to visit the app, manually test out

the button, and fix any issues that it finds. Claude

will notice that the buttons actually are working just fine, and

so it's going to terminate early with the message documenting

its findings. Now, this is just a small

example of how you can use Claude Code's GitHub integration.

I recommend you spend some time to think about how you can custom

tailor it for your own particular project.
