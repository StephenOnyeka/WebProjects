import React from "react";

function REViews() {
  return (
    <div id="REViews">
      <p>There are no reviews yet.</p>
      
      <form action="">
        <span>
        <h3>Be the first to review "DNK Yellow Shoes"</h3>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        </span>

        <>
        <label>Your review *</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        
        <label>Name *</label>
        <input type="text" />
        
        <label>Email *</label>
        <input type="text" />

        <button>SUBMIT</button>
        </>
      </form>
    </div>
  );
}

export default REViews;
