import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabaseUrl = 'https://hhtelortudenoegjgleu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhodGVsb3J0dWRlbm9lZ2pnbGV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyMjMxNDIsImV4cCI6MjA1Nzc5OTE0Mn0.9oh4XIYXhrhTTua5JoX9w9dxEGLoz5H6DONrahtuJmw'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
    let { data: books, error } = await supabase
        .from('books')
        .select('*');

    for (let book of books) {
        let bookList = document.getElementById('books');
        bookList.innerHTML += `<li>${book.title} - ${book.author} - ${book.isbn}</li>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getBooks();
});