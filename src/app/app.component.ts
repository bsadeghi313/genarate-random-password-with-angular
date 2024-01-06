import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngApp1';
  password: string;
  includeLetters: boolean = true;
  includeNumbers: boolean = true;
  includeSymbols: boolean = true;
  length: number = 15;

  constructor(){
    this.password='';
  }

  onButtonClick() {
    console.log(this.length);
    let letters='abcdefghijklmnopqrstuvwxyz'
    let uppercaseletters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers='123456789';
    let symboles='!@#$%^&*+';
    let validchars='';
    if (this.includeLetters) {validchars += letters}
    if (this.includeNumbers) {validchars += numbers}
    if (this.includeSymbols) {validchars += symboles}
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      let j = Math.random() * validchars.length;
      j = Math.floor(j);
      generatedPassword += validchars[j]
    }
    this.password = generatedPassword;
  }

  getPassword() {
    return this.password;
  }
  onChangeLetter() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeSymbol() {
    this.includeSymbols = !this.includeSymbols;
  }
  // onChangeLength(event: any) {
  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
    console.log(this.length);
  }
}
