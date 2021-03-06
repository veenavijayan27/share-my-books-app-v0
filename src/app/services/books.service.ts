import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private booksUrl = environment.BASE_URL + 'books';

  constructor(private _http: HttpClient) {}

  // Get books list
  getBooks(): Observable<Book[]> {
    return this._http.get<Book[]>(this.booksUrl);
  }

  // Get selected book details
  getBook(bookId: string | number): Observable<Book> {
    return this._http.get<Book>(`${this.booksUrl}/${bookId}`);
  }

  // Add book to bookslist
  addBook(payload: Book): Observable<Book> {
    return this._http.post<Book>(this.booksUrl, payload);
  }

  // Update selected book
  updateBook(
    bookId: string | number,
    changes: Partial<Book>
  ): Observable<Book> {
    return this._http.put<Book>(`${this.booksUrl}/${bookId}`, changes);
  }

  // Delete selected book
  deleteBook(payload: number): any {
    return this._http.delete(`${this.booksUrl}/${payload}`);
  }
}
