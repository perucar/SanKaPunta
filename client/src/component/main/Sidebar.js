import React, { useState } from 'react'
import './../../css/sideBar_main.css';
import Author from './../../images/profile-tasyo.jpg'
import Profile from './../../images/profile-paulita.jpg'

const SideBar = () => {
  return (
    <>
    {/* Button for Collapsible Sidebar */}
    <button id="location" class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#locationView">
        Location View
    </button>

    {/* Location View */}
    <div class="offcanvas offcanvas-start" tabindex="-1" id="locationView" aria-labelledby="LocationDetails">
    <div class="offcanvas-header">
        <button class="bi-arrow-left" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        {/* Location Name */}
        <div class="card-body">
            <h5 class="offcanvas-title fw-bold" id="locationViewLabel">City of Makati</h5>
            <h6 class="offcanvas-subtitle text-muted">National Capital Region</h6>
        </div>
    </div>
    <div class="offcanvas-body">
        <div class="row col-12">
            <h6 class="mb-2 text-muted">GENERAL INFORMATION</h6>
            <div class="card shadow-sm p-3 mb-4 bg-body rounded">
            <div class="card-body">
                Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
            </div>
            </div>
        </div>
        <div class="row col-12">
            <h6 class="mb-2 text-muted">FOOD</h6>
            <div class="card shadow-sm p-3 mb-4 bg-body rounded">
                <h6 class="mt-0 fw-bold">Jollijeeps</h6>
                <img src="..." class="card-img-top" alt="..."></img>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a id="foodDetails" data-bs-toggle="offcanvas" href="#detailView" role="button" class="stretched-link">View More</a>
            </div>
        </div>
        <div class="row col-12">
            <h6 class="mb-2 text-muted">FIESTAS</h6>
            <div class="card shadow-sm p-3 mb-4 bg-body rounded">
                <h6 class="mt-0 fw-bold">Baile delos Arcos</h6>
                <img src="..." class="card-img-top" alt="..."></img>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a id="fiestaDetails" data-bs-toggle="offcanvas" href="#detailView" role="button" class="stretched-link">View More</a>
            </div>
        </div>
    </div>
    </div>

    {/* Detail View */}
    <div class="offcanvas offcanvas-start" tabindex="-1" id="detailView" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
        <button class="bi-arrow-left" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        {/* Details Content */}
        <div class="card-body">
            <h5 class="offcanvas-title fw-bold" id="detailViewLabel">Jollijeeps</h5>
            <h6 class="offcanvas-subtitle text-muted">#food</h6>
        </div>
    </div>
    <div class="offcanvas-body">
        <div>
            <p class="mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <img src="..." class="card-img-top mb-4" alt="..."></img>

            <div class="row col-12">
                <div class="container">
                    <div class="row">
                        <div class="col-1">
                            <a class="bi-heart" type="button" aria-label="Save"></a>
                        </div>
                        <div class="col-7">
                            <h6 class="offcanvas-title fw-bold mb-4" id="favorites">Save to favorites</h6>
                        </div>
                    </div>
                </div>

                <div class="card shadow-sm p-3 mb-4 bg-body rounded">
                    <div class="comment text-justify float-left">
                        <img src={Author} alt="" class="rounded-circle me-3" width="40" height="40" />
                        <h6>Author: </h6>
                        <h6>Pilosopo Tasyo</h6>
                    </div>
                </div>
                
                <h6 class="mb-2 text-muted">Comments</h6>
                <div class="card shadow-sm p-3 mb-4 bg-body rounded">
                    <div class="comment text-justify float-left">
                        <img src={Profile} alt="" class="rounded-circle me-3" width="40" height="40" />
                        <h6>Paulita Gomez</h6>
                        <span class="text-muted"> - 27 August, 2022</span>
                        <br />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                    </div>
                </div>
            </div>

            <div class="row col-12">
                <input type="text" class="form-control ms-2 comments" placeholder="Leave a comment" />
            </div>
        </div>
    </div>
    </div>
    </>
    )
}
    
export default SideBar;