# SwiftBelt-JXA
This is JXA implementation of some SwiftBelt functions (SwiftBelt is a macOS system enumerator that was originally written in Swift. Here is a link to that repo for more info: https://github.com/cedowens/SwiftBelt). Even though this project does not include any Swift (only JavaScript and ObjC), I kept the same name for simplicity for the time being. 

***Note: SwiftBelt-JXA programmatically accesses non-TCC protected files/directories. Therefore, running SwiftBelt-JXA will not generate any TCC prompts, even if terminal has not been granted any TCC disk or folder permissions.***

## Info

SwiftBelt-JXA captures the following:

- Checks for Full Disk Access (without generating a TCC prompt to the user even if Terminal has not been granted any TCC permissions). Does this by doing a simple check on the user's TCC.db. Will return wither FDA has already been granted to Terminal or not.

- Checks for Security tools

- Basic System Info

- Checks to see if the machine is at a lock screen or not (Note: this is the only SwiftBelt JXA function that does run a shell command. Must be run separately with Checks('LockCheck'), as I did not include this in the Checks('All') call.)

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

1. edit the script and uncomment the line containing **Checks('All')** at the bottom after the last curly brace. You can edit 'All' to list one or more individual functions as desired (ex: **Checks('TCCCheck,SysInfo')**).

2. From Terminal run:  

> osascript SwiftBelt.js

## To run remotely via Mythic:

Download this SwiftBelt-JXA.js and via Mythic run:

1. > **jsimport SwiftBelt.js**
2. > **jsimport_call Checks('function1,function2,function3,function4....')**
3. Example: 

> jsimport_call Checks('SysInfo,RunningApps,TCCCheck')

## List of all available functions:
1. TCCCheck
2. SecCheck
3. SysInfo
4. CredSearch
5. RunningApps
6. History
7. SlackSearch
8. InstalledApps
9. FirefoxCookies
10. LockCheck


