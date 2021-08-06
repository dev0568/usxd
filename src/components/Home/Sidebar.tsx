import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { ImportExport, SupervisorAccount, FiberSmartRecord, DateRange, SurroundSound, Description } from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        height: 216,
        flexGrow: 1,
        maxWidth: 170,

    },
});

export default function MultiSelectTreeView() {
    const classes = useStyles();

    return (
        <Paper variant="outlined" style={{width: "200px"}} >
            <TreeView
                className={classes.root}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                multiSelect
            >
                <TreeItem nodeId="1" label="Dashboard" style={{ padding: "10px" }} />
                <div style={{ display: "flex" }}>
                    <ImportExport />
                    <TreeItem nodeId="1" label="Exchange" style={{ padding: "10px" }}>
                        <TreeItem nodeId="2" label="On PancakeSwap" style={{ padding: "10px" }} />
                        <TreeItem nodeId="3" label="Swap" style={{ padding: "10px" }} />

                    </TreeItem>
                </div>
                <div style={{ display: "flex" }}>
                    <SupervisorAccount />
                    <TreeItem nodeId="4" label="Network building" style={{ padding: "10px" }} />
                </div>
                <div style={{ display: "flex" }}>
                    <FiberSmartRecord />
                    <TreeItem nodeId="4" label="Coining package" style={{ padding: "10px" }} />
                </div>
                <div style={{ display: "flex" }}>
                    <DateRange />
                    <TreeItem nodeId="4" label="More Infomation" style={{ padding: "10px" }}>
                        <div style={{ display: "flex" }}>
                            <SurroundSound />
                            <TreeItem nodeId="6" label="Audit" style={{ padding: "10px" }} />
                        </div>
                        <div style={{ display: "flex" }}>
                            <Description />
                            <TreeItem nodeId="7" label="Document" style={{ padding: "10px" }} />
                        </div>
                    </TreeItem>
                </div>
            </TreeView>
        </Paper>

    );
}