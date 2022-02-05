// https://github.com/rootVIII/clickable-bootstrap-table

function clearStatus() {
    // TODO: iterate here and fade out status message before replacing with &thinsp;

    return new Promise((resolve) => {
        document.getElementById('statusMsg').innerHTML = '&thinsp;';
        resolve(null);
    });
}

function clearTable() {
    return new Promise((resolve) => {
        const tdBtns = document.getElementsByClassName('table-button');
        for (let tdBtn of tdBtns) {
            document.getElementById(tdBtn.id).style.backgroundColor = '#f8f9fa';
        }
        resolve(null);
    });
}

function selectCell(btnId) {
    return new Promise((resolve) => {
        // TODO: just grab button id an translate to td id
        console.log(btnId);
        console.log(`t${btnId.slice(1)}`);
        console.log('- - - - - - ');
        const td = document.getElementById(`t${btnId.slice(1)}`);
        const btn = document.getElementById(btnId);
        td.style.backgroundColor = '#188CFF';
        btn.style.backgroundColor = '#188CFF';
        btn.style.color = '#f8f9fa';
        resolve(null);
    });
}

function main() {
    document.addEventListener('click', (event) => {
        if (event.target.className.includes('table-button')) {
            selectCell(event.target.id).catch((err) => {
                console.log(err);
            });
        } else if (event.target.id === 'resetBtn') {
            clearTable().then(() => {
                clearStatus().catch((err) => {
                    console.log(err);
                });
            });
        } else if (event.target.id === 'submitBtn') {
            document.getElementById('statusMsg').innerHTML = 'Selected ...';
            setTimeout(() => {
                clearStatus().catch((err) => {
                    console.log(err);
                });
            }, 5000);
        }
    });
}

main();
