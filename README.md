# SwiftBelt-JXA
This is JXA implementation of some SwiftBelt functions (SwiftBelt is a macOS system enumerator that was originally written in Swift. Here is a link to that repo for more info: https://github.com/cedowens/SwiftBelt). Even though this project does not include any Swift (only JavaScript and ObjC), I kept the same name for simplicity for the time being. I did not port over all SwiftBelt functions, but the likely most useful functions:

- Check for Security tools

- Basic System Info

- Local Azure cred check

- Local ssh cred check

- Local aws cred check

- Running Apps

- zsh history

- Basic Slack enumeration

----------------

To run locally from a Terminal:

1. edit the final line of code from "return results" to "console.log(results)"

2. After final curly brace, add "SwiftBelt()" to invoke the SwiftBelt function.

3. From Terminal run: **% osascript SwiftBelt.js**

To run remotely via Mythic:

Download this SwiftBelt-JXA.js and via Mythic:

1. **jsimport SwiftBelt.js**
2. **jsimport_call SwiftBelt()**
3. Results will be returned in Mythic
