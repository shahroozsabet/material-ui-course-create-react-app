import {AppBar, Toolbar} from "@material-ui/core";

export function Header(props) {
    return (<AppBar position={"fixed"}>
        <Toolbar>
            Arc Development
        </Toolbar>
    </AppBar>)
}