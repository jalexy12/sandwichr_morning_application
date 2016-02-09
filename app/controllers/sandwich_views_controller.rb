class SandwichViewsController < ApplicationController
	before_action :authenticate_user!
	
	def index
		@sandwiches = Sandwich.all
	end

	def show
		@ingredients = Ingredient.all
		@sandwich = Sandwich.includes(:ingredients).find_by(id: params[:id])
	end
end
