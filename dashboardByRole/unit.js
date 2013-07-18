/**
 * $RCSfile$
 * $Revision$
 * $Date$
 * Copyright 2000-2004 Nedap N.V. All rights reserved.
 * Copyright 2000-2004 Nedap N.V. Tous droits réservés.
 *
 * Contains routines used for displaying units in hierarchical tree structures.
 *
 * @version	$Name$
 * @author	Jasper Kremer
 */

function menu(node) {
	child = node.nextSibling;
	while (child.nodeName != "DIV") {
		child = child.nextSibling;
	}
	if (child.style.display == "") {
		node.className = "branchCollapse";
		child.style.display = "none";
	}
	else {
		node.className = "branchExpand";
		child.style.display = "";
	}
}

function consume() {
    if( window.event) {
        // handle event
        // Bubbling is disabled for this event, preventing the next
        // event handler in the hierarchy from receiving the event.
        //only required for internet explorer
        event.cancelBubble = true;
    }
}
