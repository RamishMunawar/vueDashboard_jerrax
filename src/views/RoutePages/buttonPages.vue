<template>
  <div class="card m-4" style="width: ">
    <div class="card-body">
      <div class="row">
        <div class="col-6">
          <div class="py-3">
            <h3>Colors</h3>
            <button type="button" class="btn btn-outline-primary">
              Primary
            </button>
            <button type="button" class="btn btn-outline-secondary">
              Secondary
            </button>
            <button type="button" class="btn btn-outline-success">
              Success
            </button>
            <button type="button" class="btn btn-outline-danger">Danger</button>
            <button type="button" class="btn btn-outline-warning">
              Warning
            </button>
            <button type="button" class="btn btn-outline-info">Info</button>
            <button type="button" class="btn btn-outline-light">Light</button>
            <button type="button" class="btn btn-outline-dark">Dark</button>
          </div>

          <div class="py-3">
            <h2>Buttons with Label and Animation</h2>
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-secondary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-danger" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-warning" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-info" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-dark" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div class="py-3">
            <h2>Button Group</h2>
            <div
              class="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button type="button" class="btn btn-danger">Left</button>
              <button type="button" class="btn btn-warning">Middle</button>
              <button type="button" class="btn btn-success">Right</button>
            </div>
          </div>
          <div class="py-3">
            <h3>Popovers</h3>
            <button
              type="button"
              class="btn btn-lg btn-danger"
              data-bs-toggle="popover"
              title="Popover title"
              data-bs-content="And here's some amazing content. It's very engaging. Right?"
            >
              Click to toggle popover
            </button>
          </div>
        </div>
        <div class="col-6">
          <div class="py-3">
            <h3>Style</h3>
            <a class="btn btn-primary" href="#" role="button">Link</a>
            <button class="btn btn-primary" type="submit">Button</button>
            <input class="btn btn-primary" type="button" value="Input" />
            <input class="btn btn-primary" type="submit" value="Submit" />
            <input class="btn btn-primary" type="reset" value="Reset" />
          </div>

          <div>
            <h3>Sizes</h3>
            <button type="button" class="btn btn-primary btn-lg">
              Large button
            </button>
            <button type="button" class="btn btn-secondary btn-lg">
              Large button
            </button>
          </div>
          <div class="pagination_1 py-3">
            <h3>Pagination</h3>
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item disabled">
                  <span class="page-link">Previous</span>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active" aria-current="page">
                  <span class="page-link">2</span>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
