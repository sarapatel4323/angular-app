import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Import ReactiveFormsModule
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css'],
})
export class ApiDataComponent implements OnInit {
  data: any[] = []; // Original data from API
  filteredData: any[] = []; // Filtered data to display
  filterForm: FormGroup; // Reactive form for filtering

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      search: [''], // Search term
    });
  }

  ngOnInit(): void {
    // Fetch data from the API
    this.apiService.getData().subscribe((response) => {
      this.data = response;
      this.filteredData = response; // Initialize filtered data
    });
  }

  // Filter data based on search term
  onFilter(): void {
    const searchTerm = this.filterForm.get('search')?.value.toLowerCase();
    this.filteredData = this.data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
  }
}
