export function adminDashboardPage() {
  return `
  <div class="admin-dashboard">
    <!-- Admin Header -->
    <div class="admin-header">
      <div class="admin-header-left">
        <h1 class="admin-title">Admin Dashboard</h1>
        <p class="admin-subtitle">Manage users, pets, businesses and system settings</p>
      </div>
      <div class="admin-header-right">
        <div class="admin-search">
          <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input type="text" id="global-search" placeholder="Search users, pets, businesses..." class="search-input">
        </div>
        <button id="btn-admin-logout" class="admin-logout-btn" title="Logout">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="stats-grid">
      <div class="stat-card stat-users">
        <div class="stat-icon">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
          </svg>
        </div>
        <div class="stat-info">
          <span class="stat-label">Total Users</span>
          <span id="stat-users" class="stat-value">0</span>
        </div>
        <div class="stat-trend trend-up">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
          </svg>
          <span>+12%</span>
        </div>
      </div>

      <div class="stat-card stat-pets">
        <div class="stat-icon">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </div>
        <div class="stat-info">
          <span class="stat-label">Total Pets</span>
          <span id="stat-pets" class="stat-value">0</span>
        </div>
        <div class="stat-trend trend-up">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
          </svg>
          <span>+8%</span>
        </div>
      </div>

      <div class="stat-card stat-businesses">
        <div class="stat-icon">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          </svg>
        </div>
        <div class="stat-info">
          <span class="stat-label">Businesses</span>
          <span id="stat-businesses" class="stat-value">0</span>
        </div>
        <div class="stat-trend trend-up">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
          </svg>
          <span>+5%</span>
        </div>
      </div>

      <div class="stat-card stat-appointments">
        <div class="stat-icon">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
        </div>
        <div class="stat-info">
          <span class="stat-label">Appointments</span>
          <span id="stat-appointments" class="stat-value">0</span>
        </div>
        <div class="stat-trend trend-neutral">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
          </svg>
          <span>0%</span>
        </div>
      </div>

      <div class="stat-card stat-emergencies">
        <div class="stat-icon">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
          </svg>
        </div>
        <div class="stat-info">
          <span class="stat-label">Emergencies</span>
          <span id="stat-emergencies" class="stat-value">0</span>
        </div>
        <div class="stat-trend trend-down">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"/>
          </svg>
          <span>-3%</span>
        </div>
      </div>
    </div>

    <!-- Main Content Grid -->
    <div class="admin-content-grid">
      <!-- Left Column -->
      <div class="admin-main-content">
        <!-- Tab Navigation -->
        <div class="admin-tabs">
          <button class="admin-tab active" data-tab="users">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
            </svg>
            Users
          </button>
          <button class="admin-tab" data-tab="pets">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            Pets
          </button>
          <button class="admin-tab" data-tab="businesses">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            Businesses
          </button>
          <button class="admin-tab" data-tab="appointments">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            Appointments
          </button>
        </div>

        <!-- Tab Content: Users -->
        <div class="tab-content active" id="tab-users">
          <div class="table-header">
            <h3>User Management</h3>
            <button class="btn-add" id="btn-add-user">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
              Add User
            </button>
          </div>
          <div class="table-container">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Pets</th>
                  <th>Joined</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="users-table-body">
                <tr>
                  <td colspan="6" class="loading-cell">
                    <div class="loading-spinner"></div>
                    Loading users...
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Tab Content: Pets -->
        <div class="tab-content" id="tab-pets">
          <div class="table-header">
            <h3>Pet Management</h3>
            <div class="filter-group">
              <select id="filter-species" class="filter-select">
                <option value="">All Species</option>
                <option value="Dog">Dogs</option>
                <option value="Cat">Cats</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div class="table-container">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>Pet</th>
                  <th>Species</th>
                  <th>Breed</th>
                  <th>Age</th>
                  <th>Owner</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="pets-table-body">
                <tr>
                  <td colspan="6" class="loading-cell">
                    <div class="loading-spinner"></div>
                    Loading pets...
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Tab Content: Businesses -->
        <div class="tab-content" id="tab-businesses">
          <div class="table-header">
            <h3>Business Management</h3>
            <div class="filter-group">
              <select id="filter-business-type" class="filter-select">
                <option value="">All Types</option>
                <option value="clinic">Veterinary Clinics</option>
                <option value="petshop">Pet Shops</option>
                <option value="grooming">Grooming</option>
              </select>
              <button class="btn-add" id="btn-add-business">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                Add Business
              </button>
            </div>
          </div>
          <div class="table-container">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>Business</th>
                  <th>Type</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Rating</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="businesses-table-body">
                <tr>
                  <td colspan="6" class="loading-cell">
                    <div class="loading-spinner"></div>
                    Loading businesses...
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Tab Content: Appointments -->
        <div class="tab-content" id="tab-appointments">
          <div class="table-header">
            <h3>Appointments</h3>
            <div class="filter-group">
              <select id="filter-appointment-status" class="filter-select">
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
          <div class="table-container">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Pet</th>
                  <th>Owner</th>
                  <th>Business</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="appointments-table-body">
                <tr>
                  <td colspan="7" class="loading-cell">
                    <div class="loading-spinner"></div>
                    Loading appointments...
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Right Column - Activity & Quick Actions -->
      <div class="admin-sidebar">
        <!-- Quick Actions -->
        <div class="quick-actions-card">
          <h3>Quick Actions</h3>
          <div class="quick-actions-grid">
            <button class="quick-action" id="qa-export-users">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Export Users
            </button>
            <button class="quick-action" id="qa-send-notification">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
              </svg>
              Send Notification
            </button>
            <button class="quick-action" id="qa-view-reports">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              View Reports
            </button>
            <button class="quick-action" id="qa-system-settings">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Settings
            </button>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="activity-card">
          <h3>Recent Activity</h3>
          <div class="activity-list" id="activity-list">
            <div class="activity-item">
              <div class="activity-icon activity-user">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                </svg>
              </div>
              <div class="activity-content">
                <p class="activity-text">New user registered</p>
                <span class="activity-time">2 minutes ago</span>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon activity-pet">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <div class="activity-content">
                <p class="activity-text">New pet added: Max</p>
                <span class="activity-time">15 minutes ago</span>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon activity-appointment">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div class="activity-content">
                <p class="activity-text">Appointment scheduled</p>
                <span class="activity-time">1 hour ago</span>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon activity-business">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <div class="activity-content">
                <p class="activity-text">New clinic registered</p>
                <span class="activity-time">3 hours ago</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Pet Statistics -->
        <div class="stats-card">
          <h3>Pet Statistics</h3>
          <div class="pet-stats">
            <div class="pet-stat-item">
              <div class="pet-stat-bar">
                <div class="pet-stat-fill dogs-fill" id="dogs-bar" style="width: 60%"></div>
              </div>
              <div class="pet-stat-info">
                <span class="pet-stat-label">Dogs</span>
                <span class="pet-stat-value" id="dogs-count">0</span>
              </div>
            </div>
            <div class="pet-stat-item">
              <div class="pet-stat-bar">
                <div class="pet-stat-fill cats-fill" id="cats-bar" style="width: 30%"></div>
              </div>
              <div class="pet-stat-info">
                <span class="pet-stat-label">Cats</span>
                <span class="pet-stat-value" id="cats-count">0</span>
              </div>
            </div>
            <div class="pet-stat-item">
              <div class="pet-stat-bar">
                <div class="pet-stat-fill other-fill" id="other-bar" style="width: 10%"></div>
              </div>
              <div class="pet-stat-info">
                <span class="pet-stat-label">Other</span>
                <span class="pet-stat-value" id="other-count">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- User Modal -->
    <div id="modal-user" class="admin-modal hidden">
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="modal-user-title">Add User</h2>
          <button class="modal-close" id="close-user-modal">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <form id="user-form" class="modal-form">
          <input type="hidden" id="user-id">
          <div class="form-group">
            <label for="user-nombre">Name</label>
            <input type="text" id="user-nombre" required placeholder="Full name">
          </div>
          <div class="form-group">
            <label for="user-email">Email</label>
            <input type="email" id="user-email" required placeholder="email@example.com">
          </div>
          <div class="form-group">
            <label for="user-telefono">Phone</label>
            <input type="tel" id="user-telefono" placeholder="+57 300 123 4567">
          </div>
          <div class="form-group">
            <label for="user-direccion">Address</label>
            <input type="text" id="user-direccion" placeholder="Street address">
          </div>
          <div class="form-actions">
            <button type="button" class="btn-cancel" id="cancel-user-modal">Cancel</button>
            <button type="submit" class="btn-submit">Save User</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Business Modal -->
    <div id="modal-business" class="admin-modal hidden">
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="modal-business-title">Add Business</h2>
          <button class="modal-close" id="close-business-modal">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <form id="business-form" class="modal-form">
          <input type="hidden" id="business-id">
          <div class="form-group">
            <label for="business-nombre">Business Name</label>
            <input type="text" id="business-nombre" required placeholder="Business name">
          </div>
          <div class="form-group">
            <label for="business-tipo">Type</label>
            <select id="business-tipo" required>
              <option value="">Select type</option>
              <option value="clinic">Veterinary Clinic</option>
              <option value="petshop">Pet Shop</option>
              <option value="grooming">Grooming</option>
            </select>
          </div>
          <div class="form-group">
            <label for="business-direccion">Address</label>
            <input type="text" id="business-direccion" required placeholder="Street address">
          </div>
          <div class="form-group">
            <label for="business-telefono">Phone</label>
            <input type="tel" id="business-telefono" placeholder="+57 300 123 4567">
          </div>
          <div class="form-group">
            <label for="business-horario">Hours</label>
            <input type="text" id="business-horario" placeholder="Mon-Fri 8am-6pm">
          </div>
          <div class="form-actions">
            <button type="button" class="btn-cancel" id="cancel-business-modal">Cancel</button>
            <button type="submit" class="btn-submit">Save Business</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div id="modal-delete" class="admin-modal hidden">
      <div class="modal-overlay"></div>
      <div class="modal-content modal-small">
        <div class="modal-header">
          <h2>Confirm Delete</h2>
          <button class="modal-close" id="close-delete-modal">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div class="modal-body">
          <p id="delete-message">Are you sure you want to delete this item? This action cannot be undone.</p>
        </div>
        <div class="form-actions">
          <button type="button" class="btn-cancel" id="cancel-delete">Cancel</button>
          <button type="button" class="btn-danger" id="confirm-delete">Delete</button>
        </div>
      </div>
    </div>
  </div>
  `;
}

// Store for delete action callback
let deleteCallback = null;

export function adminDashboardEvents() {
  // Check admin auth
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  if (!user || user.rol !== 'admin') {
    window.location.hash = '#/';
    return;
  }

  // Initialize tabs
  initTabs();
  
  // Initialize modals
  initModals();
  
  // Load initial data
  loadStats();
  loadUsers();
  loadPets();
  loadBusinesses();
  loadAppointments();

  // Logout
  const logoutBtn = document.getElementById('btn-admin-logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('user');
      window.location.hash = '#/';
    });
  }

  // Global search
  const searchInput = document.getElementById('global-search');
  if (searchInput) {
    searchInput.addEventListener('input', debounce((e) => {
      const query = e.target.value.toLowerCase();
      filterCurrentTab(query);
    }, 300));
  }

  // Quick actions
  document.getElementById('qa-export-users')?.addEventListener('click', exportUsers);
  document.getElementById('qa-send-notification')?.addEventListener('click', () => alert('Notification feature coming soon'));
  document.getElementById('qa-view-reports')?.addEventListener('click', () => alert('Reports feature coming soon'));
  document.getElementById('qa-system-settings')?.addEventListener('click', () => alert('Settings feature coming soon'));
}

function initTabs() {
  const tabs = document.querySelectorAll('.admin-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Hide all tab contents
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      
      // Show selected tab content
      const tabId = tab.dataset.tab;
      document.getElementById(`tab-${tabId}`)?.classList.add('active');
    });
  });

  // Filter listeners
  document.getElementById('filter-species')?.addEventListener('change', (e) => {
    loadPets(e.target.value);
  });

  document.getElementById('filter-business-type')?.addEventListener('change', (e) => {
    loadBusinesses(e.target.value);
  });

  document.getElementById('filter-appointment-status')?.addEventListener('change', (e) => {
    loadAppointments(e.target.value);
  });
}

function initModals() {
  // User modal
  const userModal = document.getElementById('modal-user');
  const addUserBtn = document.getElementById('btn-add-user');
  const closeUserBtn = document.getElementById('close-user-modal');
  const cancelUserBtn = document.getElementById('cancel-user-modal');
  const userForm = document.getElementById('user-form');

  addUserBtn?.addEventListener('click', () => {
    document.getElementById('modal-user-title').textContent = 'Add User';
    userForm?.reset();
    document.getElementById('user-id').value = '';
    userModal?.classList.remove('hidden');
  });

  closeUserBtn?.addEventListener('click', () => userModal?.classList.add('hidden'));
  cancelUserBtn?.addEventListener('click', () => userModal?.classList.add('hidden'));
  userModal?.querySelector('.modal-overlay')?.addEventListener('click', () => userModal?.classList.add('hidden'));

  userForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    await saveUser();
    userModal?.classList.add('hidden');
  });

  // Business modal
  const businessModal = document.getElementById('modal-business');
  const addBusinessBtn = document.getElementById('btn-add-business');
  const closeBusinessBtn = document.getElementById('close-business-modal');
  const cancelBusinessBtn = document.getElementById('cancel-business-modal');
  const businessForm = document.getElementById('business-form');

  addBusinessBtn?.addEventListener('click', () => {
    document.getElementById('modal-business-title').textContent = 'Add Business';
    businessForm?.reset();
    document.getElementById('business-id').value = '';
    businessModal?.classList.remove('hidden');
  });

  closeBusinessBtn?.addEventListener('click', () => businessModal?.classList.add('hidden'));
  cancelBusinessBtn?.addEventListener('click', () => businessModal?.classList.add('hidden'));
  businessModal?.querySelector('.modal-overlay')?.addEventListener('click', () => businessModal?.classList.add('hidden'));

  businessForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    await saveBusiness();
    businessModal?.classList.add('hidden');
  });

  // Delete modal
  const deleteModal = document.getElementById('modal-delete');
  const closeDeleteBtn = document.getElementById('close-delete-modal');
  const cancelDeleteBtn = document.getElementById('cancel-delete');
  const confirmDeleteBtn = document.getElementById('confirm-delete');

  closeDeleteBtn?.addEventListener('click', () => deleteModal?.classList.add('hidden'));
  cancelDeleteBtn?.addEventListener('click', () => deleteModal?.classList.add('hidden'));
  deleteModal?.querySelector('.modal-overlay')?.addEventListener('click', () => deleteModal?.classList.add('hidden'));

  confirmDeleteBtn?.addEventListener('click', async () => {
    if (deleteCallback) {
      await deleteCallback();
      deleteCallback = null;
    }
    deleteModal?.classList.add('hidden');
  });
}

// Load stats
async function loadStats() {
  try {
    const [usersRes, petsRes, businessesRes, appointmentsRes] = await Promise.all([
      fetch('/api/clientes'),
      fetch('/api/mascotas'),
      fetch('/api/establecimientos'),
      fetch('/api/citas')
    ]);

    const users = await usersRes.json();
    const pets = await petsRes.json();
    const businesses = await businessesRes.json();
    const appointments = await appointmentsRes.json();

    document.getElementById('stat-users').textContent = users.length || 0;
    document.getElementById('stat-pets').textContent = pets.length || 0;
    document.getElementById('stat-businesses').textContent = businesses.length || 0;
    document.getElementById('stat-appointments').textContent = appointments.length || 0;

    // Pet statistics
    const dogs = pets.filter(p => p.especie === 'Dog' || p.especie === 'Perro').length;
    const cats = pets.filter(p => p.especie === 'Cat' || p.especie === 'Gato').length;
    const other = pets.length - dogs - cats;
    const total = pets.length || 1;

    document.getElementById('dogs-count').textContent = dogs;
    document.getElementById('cats-count').textContent = cats;
    document.getElementById('other-count').textContent = other;

    document.getElementById('dogs-bar').style.width = `${(dogs / total) * 100}%`;
    document.getElementById('cats-bar').style.width = `${(cats / total) * 100}%`;
    document.getElementById('other-bar').style.width = `${(other / total) * 100}%`;
  } catch (error) {
    console.error('Error loading stats:', error);
  }
}

// Load users
async function loadUsers() {
  const tbody = document.getElementById('users-table-body');
  if (!tbody) return;

  try {
    const res = await fetch('/api/clientes');
    const users = await res.json();

    if (users.length === 0) {
      tbody.innerHTML = '<tr><td colspan="6" class="empty-cell">No users found</td></tr>';
      return;
    }

    tbody.innerHTML = users.map(user => `
      <tr>
        <td>
          <div class="user-cell">
            <div class="user-avatar">${(user.nombre || 'U')[0].toUpperCase()}</div>
            <span>${user.nombre || 'Unknown'}</span>
          </div>
        </td>
        <td>${user.email || '-'}</td>
        <td>${user.telefono || '-'}</td>
        <td><span class="badge badge-info">${user.pet_count || 0}</span></td>
        <td>${formatDate(user.created_at)}</td>
        <td>
          <div class="action-buttons">
            <button class="btn-icon btn-edit" onclick="editUser(${user.id_cliente})" title="Edit">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
              </svg>
            </button>
            <button class="btn-icon btn-delete" onclick="confirmDeleteUser(${user.id_cliente})" title="Delete">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  } catch (error) {
    console.error('Error loading users:', error);
    tbody.innerHTML = '<tr><td colspan="6" class="error-cell">Error loading users</td></tr>';
  }
}

// Load pets
async function loadPets(filterSpecies = '') {
  const tbody = document.getElementById('pets-table-body');
  if (!tbody) return;

  try {
    const res = await fetch('/api/mascotas');
    let pets = await res.json();

    if (filterSpecies) {
      pets = pets.filter(p => p.especie === filterSpecies);
    }

    if (pets.length === 0) {
      tbody.innerHTML = '<tr><td colspan="6" class="empty-cell">No pets found</td></tr>';
      return;
    }

    tbody.innerHTML = pets.map(pet => `
      <tr>
        <td>
          <div class="pet-cell">
            <div class="pet-avatar ${pet.especie === 'Cat' || pet.especie === 'Gato' ? 'cat' : 'dog'}">
              ${pet.especie === 'Cat' || pet.especie === 'Gato' ? '🐱' : '🐶'}
            </div>
            <span>${pet.nombre || 'Unknown'}</span>
          </div>
        </td>
        <td><span class="badge badge-${pet.especie === 'Dog' || pet.especie === 'Perro' ? 'primary' : pet.especie === 'Cat' || pet.especie === 'Gato' ? 'secondary' : 'neutral'}">${pet.especie || '-'}</span></td>
        <td>${pet.raza || '-'}</td>
        <td>${pet.edad || '-'} years</td>
        <td>${pet.owner_name || '-'}</td>
        <td>
          <div class="action-buttons">
            <button class="btn-icon btn-view" onclick="viewPet(${pet.id_mascota})" title="View">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </button>
            <button class="btn-icon btn-delete" onclick="confirmDeletePet(${pet.id_mascota})" title="Delete">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  } catch (error) {
    console.error('Error loading pets:', error);
    tbody.innerHTML = '<tr><td colspan="6" class="error-cell">Error loading pets</td></tr>';
  }
}

// Load businesses
async function loadBusinesses(filterType = '') {
  const tbody = document.getElementById('businesses-table-body');
  if (!tbody) return;

  try {
    const res = await fetch('/api/establecimientos');
    let businesses = await res.json();

    if (filterType) {
      businesses = businesses.filter(b => b.tipo === filterType);
    }

    if (businesses.length === 0) {
      tbody.innerHTML = '<tr><td colspan="6" class="empty-cell">No businesses found</td></tr>';
      return;
    }

    tbody.innerHTML = businesses.map(business => `
      <tr>
        <td>
          <div class="business-cell">
            <div class="business-avatar">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <span>${business.nombre || 'Unknown'}</span>
          </div>
        </td>
        <td><span class="badge badge-${business.tipo === 'clinic' ? 'success' : business.tipo === 'petshop' ? 'warning' : 'info'}">${business.tipo || '-'}</span></td>
        <td>${business.direccion || '-'}</td>
        <td>${business.telefono || '-'}</td>
        <td>
          <div class="rating">
            ${'★'.repeat(Math.floor(business.rating || 0))}${'☆'.repeat(5 - Math.floor(business.rating || 0))}
            <span>${business.rating || 'N/A'}</span>
          </div>
        </td>
        <td>
          <div class="action-buttons">
            <button class="btn-icon btn-edit" onclick="editBusiness(${business.id_establecimiento})" title="Edit">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
              </svg>
            </button>
            <button class="btn-icon btn-delete" onclick="confirmDeleteBusiness(${business.id_establecimiento})" title="Delete">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  } catch (error) {
    console.error('Error loading businesses:', error);
    tbody.innerHTML = '<tr><td colspan="6" class="error-cell">Error loading businesses</td></tr>';
  }
}

// Load appointments
async function loadAppointments(filterStatus = '') {
  const tbody = document.getElementById('appointments-table-body');
  if (!tbody) return;

  try {
    const res = await fetch('/api/citas');
    let appointments = await res.json();

    if (filterStatus) {
      appointments = appointments.filter(a => a.estado === filterStatus);
    }

    if (appointments.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" class="empty-cell">No appointments found</td></tr>';
      return;
    }

    tbody.innerHTML = appointments.map(apt => `
      <tr>
        <td>${formatDate(apt.fecha)}</td>
        <td>${apt.hora || '-'}</td>
        <td>${apt.pet_name || '-'}</td>
        <td>${apt.owner_name || '-'}</td>
        <td>${apt.business_name || '-'}</td>
        <td><span class="badge badge-${getStatusClass(apt.estado)}">${apt.estado || 'pending'}</span></td>
        <td>
          <div class="action-buttons">
            <button class="btn-icon btn-edit" onclick="updateAppointmentStatus(${apt.id_cita})" title="Update Status">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </button>
            <button class="btn-icon btn-delete" onclick="confirmDeleteAppointment(${apt.id_cita})" title="Cancel">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  } catch (error) {
    console.error('Error loading appointments:', error);
    tbody.innerHTML = '<tr><td colspan="7" class="error-cell">Error loading appointments</td></tr>';
  }
}

// Save user
async function saveUser() {
  const id = document.getElementById('user-id').value;
  const data = {
    nombre: document.getElementById('user-nombre').value,
    email: document.getElementById('user-email').value,
    telefono: document.getElementById('user-telefono').value,
    direccion: document.getElementById('user-direccion').value
  };

  try {
    const url = id ? `/api/clientes/${id}` : '/api/clientes';
    const method = id ? 'PUT' : 'POST';
    
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    loadUsers();
    loadStats();
  } catch (error) {
    console.error('Error saving user:', error);
  }
}

// Save business
async function saveBusiness() {
  const id = document.getElementById('business-id').value;
  const data = {
    nombre: document.getElementById('business-nombre').value,
    tipo: document.getElementById('business-tipo').value,
    direccion: document.getElementById('business-direccion').value,
    telefono: document.getElementById('business-telefono').value,
    horario: document.getElementById('business-horario').value
  };

  try {
    const url = id ? `/api/establecimientos/${id}` : '/api/establecimientos';
    const method = id ? 'PUT' : 'POST';
    
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    loadBusinesses();
    loadStats();
  } catch (error) {
    console.error('Error saving business:', error);
  }
}

// Global functions for onclick handlers
window.editUser = async function(id) {
  try {
    const res = await fetch(`/api/clientes/${id}`);
    const user = await res.json();
    
    document.getElementById('modal-user-title').textContent = 'Edit User';
    document.getElementById('user-id').value = id;
    document.getElementById('user-nombre').value = user.nombre || '';
    document.getElementById('user-email').value = user.email || '';
    document.getElementById('user-telefono').value = user.telefono || '';
    document.getElementById('user-direccion').value = user.direccion || '';
    
    document.getElementById('modal-user')?.classList.remove('hidden');
  } catch (error) {
    console.error('Error loading user:', error);
  }
};

window.confirmDeleteUser = function(id) {
  document.getElementById('delete-message').textContent = 'Are you sure you want to delete this user? All associated data will be removed.';
  deleteCallback = async () => {
    await fetch(`/api/clientes/${id}`, { method: 'DELETE' });
    loadUsers();
    loadStats();
  };
  document.getElementById('modal-delete')?.classList.remove('hidden');
};

window.viewPet = function(id) {
  window.location.hash = `#/pet-profile/${id}`;
};

window.confirmDeletePet = function(id) {
  document.getElementById('delete-message').textContent = 'Are you sure you want to delete this pet? All medical records will be removed.';
  deleteCallback = async () => {
    await fetch(`/api/mascotas/${id}`, { method: 'DELETE' });
    loadPets();
    loadStats();
  };
  document.getElementById('modal-delete')?.classList.remove('hidden');
};

window.editBusiness = async function(id) {
  try {
    const res = await fetch(`/api/establecimientos/${id}`);
    const business = await res.json();
    
    document.getElementById('modal-business-title').textContent = 'Edit Business';
    document.getElementById('business-id').value = id;
    document.getElementById('business-nombre').value = business.nombre || '';
    document.getElementById('business-tipo').value = business.tipo || '';
    document.getElementById('business-direccion').value = business.direccion || '';
    document.getElementById('business-telefono').value = business.telefono || '';
    document.getElementById('business-horario').value = business.horario || '';
    
    document.getElementById('modal-business')?.classList.remove('hidden');
  } catch (error) {
    console.error('Error loading business:', error);
  }
};

window.confirmDeleteBusiness = function(id) {
  document.getElementById('delete-message').textContent = 'Are you sure you want to delete this business?';
  deleteCallback = async () => {
    await fetch(`/api/establecimientos/${id}`, { method: 'DELETE' });
    loadBusinesses();
    loadStats();
  };
  document.getElementById('modal-delete')?.classList.remove('hidden');
};

window.updateAppointmentStatus = async function(id) {
  const newStatus = prompt('Enter new status (pending, confirmed, completed, cancelled):');
  if (newStatus && ['pending', 'confirmed', 'completed', 'cancelled'].includes(newStatus)) {
    try {
      await fetch(`/api/citas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado: newStatus })
      });
      loadAppointments();
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  }
};

window.confirmDeleteAppointment = function(id) {
  document.getElementById('delete-message').textContent = 'Are you sure you want to cancel this appointment?';
  deleteCallback = async () => {
    await fetch(`/api/citas/${id}`, { method: 'DELETE' });
    loadAppointments();
    loadStats();
  };
  document.getElementById('modal-delete')?.classList.remove('hidden');
};

// Export users to CSV
function exportUsers() {
  fetch('/api/clientes')
    .then(res => res.json())
    .then(users => {
      const csv = [
        ['Name', 'Email', 'Phone', 'Address', 'Joined'].join(','),
        ...users.map(u => [u.nombre, u.email, u.telefono, u.direccion, u.created_at].join(','))
      ].join('\n');
      
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'users-export.csv';
      a.click();
    });
}

// Utility functions
function formatDate(dateStr) {
  if (!dateStr) return '-';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function getStatusClass(status) {
  const classes = {
    pending: 'warning',
    confirmed: 'info',
    completed: 'success',
    cancelled: 'danger'
  };
  return classes[status] || 'neutral';
}

function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

function filterCurrentTab(query) {
  const activeTab = document.querySelector('.admin-tab.active')?.dataset.tab;
  const rows = document.querySelectorAll(`#tab-${activeTab} tbody tr`);
  
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(query) ? '' : 'none';
  });
}
