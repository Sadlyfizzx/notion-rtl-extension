const RTL_CHAR_REGEX = /[\u0590-\u05FF\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;

function hasRTL(text) {
    return RTL_CHAR_REGEX.test(text || "");
}

function applyRTL() {
    // editor roots
    document.querySelectorAll('[contenteditable="true"]').forEach(el => {
        const text = el.innerText || "";
        if (hasRTL(text)) {
            el.setAttribute("dir", "rtl");
        }
    });

    // blocks (optional improvement)
    document.querySelectorAll('.notion-selectable').forEach(block => {
        const text = block.innerText || "";
        if (hasRTL(text)) {
            block.setAttribute("dir", "rtl");
        }
    });
}

// run continuously because Notion re-renders
setInterval(applyRTL, 1000);

console.log("[Notion RTL] running");