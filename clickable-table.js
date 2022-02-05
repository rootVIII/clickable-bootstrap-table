// https://github.com/rootVIII/clickable-bootstrap-table

function clearStatus() {
    document.getElementById('statusMsg').innerHTML = '&thinsp;';
}

function deselectCells(btnId = null) {
    return new Promise((resolve) => {
        const tdBtns = document.getElementsByClassName('table-button');
        for (let tdBtn of tdBtns) {
            if (btnId !== tdBtn.id && tdBtn.style.backgroundColor.length) {
                const td = document.getElementById(`t${tdBtn.id.slice(1)}`);
                tdBtn.style.color = '#212529';
                tdBtn.style.backgroundColor = 'transparent';
                td.style.setProperty('color', '#F8F9FA', 'important');
                td.style.backgroundColor = '#F8F9FA';
            }
        }
        resolve(null);
    });
}

function selectCell(btnId) {
    return new Promise((resolve) => {
        const td = document.getElementById(`t${btnId.slice(1)}`);
        const btn = document.getElementById(btnId);
        btn.style.setProperty('color', '#F8F9FA', 'important');
        btn.style.backgroundColor = '#188CFF';
        td.style.backgroundColor = '#188CFF';
        document.getElementById('statusMsg').innerHTML = btn.innerText.trim();
        resolve(null);
    });
}

function setSelection() {
    const statusMsg = document.getElementById('statusMsg');
    for (let tdBtn of document.getElementsByClassName('table-button')) {
        console.log(tdBtn.style.backgroundColor.trim());
        if (tdBtn.style.backgroundColor === 'rgb(24, 140, 255)') {
            console.log(tdBtn.id);
            statusMsg.innerHTML = `Selected ${tdBtn.innerText.trim()}`;
        }
    }
}

function main() {
    document.addEventListener('click', (event) => {
        if (event.target.className.includes('table-button')) {
            selectCell(event.target.id).catch((err) => { console.log(err); });
        } else if (event.target.id === 'resetBtn') {
            deselectCells().catch((err) => { console.log(err); });
        } else if (event.target.id === 'submitBtn') {
            setSelection();
            setTimeout(() => {
                clearStatus();
            }, 4000);
        }
    });
}

main();
