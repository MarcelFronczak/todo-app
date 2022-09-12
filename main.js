
window.addEventListener('load', () => {
    const form = document.querySelector('#input-form');
    const input = document.querySelector('.input');
    const tasks = document.querySelector('.tasks');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!input.value) return;
        
        const taskText = input.value;                        

        const divTask = document.createElement('div');
        divTask.classList.add('task');

        const inputTask = document.createElement('input');
        inputTask.classList.add('input-task');
        inputTask.type = 'text';
        inputTask.value = taskText;
        inputTask.setAttribute('readonly', 'readonly');
        inputTask.setAttribute('spellcheck', 'false');

        const divBtn = document.createElement('div');
        divBtn.classList.add('buttons');

        const edit = document.createElement('button');
        edit.classList.add('edit');
        edit.innerText = 'Edit';
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.innerText = 'Delete';

        tasks.appendChild(divTask);

        divTask.appendChild(inputTask);
        divTask.appendChild(divBtn);

        divBtn.appendChild(edit);
        divBtn.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', () => {
            divTask.remove();
        });

        edit.addEventListener('click', () => {
            if (edit.innerText == 'Edit') {
                edit.innerText = 'Save';
                edit.classList.add('save')
                inputTask.removeAttribute('readonly');
            } else {
                edit.innerText = 'Edit';
                edit.classList.remove('save')
                inputTask.setAttribute('readonly', 'readonly');
            }
        });
        input.value = '';
    });
});

