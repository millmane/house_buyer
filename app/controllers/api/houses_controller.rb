class Api::HousesController < ApplicationController
  def index
    @House = House.all()
  end

  def create
  end

end
