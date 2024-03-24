import exp from "constants";
import {Button} from "@/components/ui/button";
const ButtonsPage = () => {
    return (
        <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
            <Button variant="default"> 
            Default 
            </Button>
            <Button variant="primary"> 
            Primary 
            </Button>
            <Button variant="primaryOutline"> 
            Primary Outline 
            </Button> 
            <Button variant="secondary"> 
            Secondary
            </Button>
            <Button variant="secondaryOutline"> 
            Secondary Outline
            </Button>
            <Button variant="danger"> 
            Rose
            </Button>
            <Button variant="dangerOutline"> 
            Rose Outline
            </Button>
            <Button variant="super"> 
            Super
            </Button>
            <Button variant="superOutline"> 
            Super Outline
            </Button>
            <Button variant="ghost"> 
            Ghost
            </Button>
            <Button variant="sidebar"> 
            Sidebar
            </Button>
            <Button variant="sidebarOutline"> 
            Sidebar Outline
            </Button>
        </div>
    );
    };
    export default ButtonsPage;