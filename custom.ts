
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="Basic"
    One,
    //% block="Dark"
    Two,
    //%block="Light"
    Three
}
enum DialogLayout2 {
    //% block=bottom
    Bottom2,
    //% block=left
    Left2,
    //% block=right
    Right2,
    //% block=top
    Top2,
    //% block=center
    Center2,
    //% block="full screen"
    Full2
}
let f = ""
let t = "";
let e = ":"
let dialogFrame = sprites.create(img`
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
    ......................................................................................................................................................
`, SpriteKind.Player)
let character = sprites.create(img`
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
`, SpriteKind.Player)
dialogFrame.setFlag(SpriteFlag.RelativeToCamera, true)
let color11 = 2
let color22 = 15
/**
 * Custom blocks
 */
//% weight=100 color=#123456 icon=""
//%block="Dialog"
namespace custom {
    /**
     * TODO:hiiiiiii
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
        //%handlerStatement
        //%block="create Dialog sentence $s with character name %s2"
        //%group="Create"
    export function fooo(s: string, s2: string, handler: () => void ){
        dialogFrame.setImage(img`
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `)
        dialogFrame.setPosition(80, 90)
        dialogFrame.setFlag(SpriteFlag.RelativeToCamera, true)
        let e2 = ":"
        let t2 = s2
        scene.createRenderable(scene.HUD_Z, function (target, camera) {
            const w = 30;
            const h = 15;
            const x = target.width - w - 1;
            const y = target.height - h - 1;
            // Fill it in with whatever else you want
            // text
            screen.print(
                t2 + e2,
                x + -124,
                y + -35,
        /** white **/ color11,
                image.font8
            );

            screen.print(
                f,
                x + -120,
                y + -15,
        /** white **/ 0x2,
                image.font8
            );
        });

        let currentIndex = 0
        let maxLines = 5
        let currentLine = ""
        let lines: string[] = []
        // Handle button A press to navigate through the text
        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            // Check if there are more lines to show
            if (currentIndex + maxLines < lines.length) {
                // Show next set of lines
                currentIndex += maxLines
                
            } else {
                // If all lines are displayed, trigger the handler action
                // Trigger when all lines are read
                onAllLinesDisplayed()
                dialogFrame.setImage(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                `)
                t2 = ""
                e2 = ""
                lines = []
                character.setImage(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                `)
                
                handler();
                }
        })
        controller.B.onEvent(ControllerButtonEvent.Pressed, function() {
            currentIndex--
            currentIndex--
            currentIndex--
        })
        // Handler for when all lines have been displayed
        // You can also trigger other actions here, like playing a sound, changing scenes, etc.
        function onAllLinesDisplayed() {
            // Trigger action when all lines have been displayed and A is pressed
            // Display a message or any action you want to trigger here
           
        }
        // Ensure currentIndex starts at 0 to show the first line      
        // Global variables for text handling
        let text = s
        
        // Set how many lines are shown at once
        maxLines = 3
        // Text wrapping logic
        let words = text.split(" ")
        for (let word of words) {
            if (("" + currentLine + word).length > 20) {
                // Wrap text at 20 characters per line
                lines.push(currentLine.trim())
                currentLine = "" + word + " "
            } else {
                currentLine = "" + currentLine + word + " "
            }
        }
        if (currentLine.trim().length > 0) {
            lines.push(currentLine.trim())
        }
        scene.createRenderable(0, function (target: Image, camera: scene.Camera) {
            for (let i = 0; i < maxLines; i++) { // Use maxLines here to control how many lines are shown
                if (currentIndex + i < lines.length) {
                    target.print(lines[currentIndex + i], 10, 80 + i * 10, color22,) // Print each line
                   
                }
            }
        })
      
        }
 
    //% block="Set Dialog Image to $image2||"
    //% image2.shadow=screen_image_picker
    //%group="Customize"
    export function fo(image2: Image): void {
        character.setImage(image2)
        character.setPosition(35, 35)
    }
    //%block="set Dialog character name color to $g"
    //%g.shadow="colorindexpicker"
    export function fd(g: number): void {
        color11 = g    
    }
    //%block="set Dialog text color to $g"
    //%g.shadow="colorindexpicker"
     //%group="Customize"
    export function fdd(g: number): void {
        color22 = g
    }
    //%block="set Dialog box color to  $g"
    //%g.shadow="colorindexpicker"
     //%group="Customize"
    export function fdddd(g: number): void {
        dialogFrame.image.replace(1, g)
        }
    }