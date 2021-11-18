# SwiftBelt-JXA
This is JXA implementation of some SwiftBelt functions (SwiftBelt is a macOS system enumerator that was originally written in Swift. Here is a link to that repo for more info: https://github.com/cedowens/SwiftBelt). Even though this project does not include any Swift (only JavaScript and ObjC), I kept the same name for simplicity for the time being. 

***Note: SwiftBelt-JXA programmatically accesses non-TCC protected files/directories. Therefore, running SwiftBelt-JXA will not generate any TCC prompts, even if terminal has not been granted any TCC disk or folder permissions.***

## Info

SwiftBelt-JXA captures the following:

- Checks for Full Disk Access (without generating a TCC prompt to the user even if Terminal has not been granted any TCC permissions). Does this by doing a simple check on the user's TCC.db. Will return wither FDA has already been granted to Terminal or not.

- Checks for Security tools

- Basic System Info

- Local Azure cred check

- Local ssh cred check

- Local aws cred check

- Lists Running Apps

- zsh history

- Basic Slack enumeration

- /private/var/db/receipts listing

- Firefox cookies

----------------


## To run locally from a Terminal:

1. edit the script and add **SwiftBelt()** at the bottom after the last curly brace

2. From Terminal run:  

> osascript SwiftBelt.js

## To run remotely via Mythic:

Download this SwiftBelt-JXA.js and via Mythic:

1. **jsimport SwiftBelt.js**
2. **jsimport_call SwiftBelt()**
3. Results will be returned in Mythic
