class SlatesController < ApplicationController
  before_action :authenticate_user!, except: :shared

  def index
    slates = current_user.slates
    render json: slates
  end

  def show
    slate = current_user.slates.find(params[:id])
    render json: slate.to_json(include: [:user, :issues])
  end

  def create
    slate = current_user.slates.create(new_slate_params)

    params[:slate][:issues] && params[:slate][:issues].each do |issue|
      slate.issues.create(name: issue[:name], reasons: issue[:reasons])
    end

    render json: slate.to_json(include: [:user, :issues])
  end

  def destroy
    current_user.slates.find(params[:id]).destroy!
    render json: true
  end

  def latest
    slate = current_user.slates.order(:id).last
    render json: slate.to_json(include: [:user, :issues])
  end

  def update
    slate = current_user.slates.find_by(id: params[:id])
    slate.update_attributes(slate_params)
    render json: slate
  end

  def shared
    slate = Slate.where(id: params[:id], shared: true).first
    render json: slate.to_json(include: [:user, :issues])
  end

  private
  def new_slate_params
    params.require(:slate).permit(:id, :name, :president, :president_reasons,
                                  :us_senate, :us_senate_reasons,
                                  :us_congress, :us_congress_reasons,
                                  :nv_senate, :nv_senate_reasons,
                                  :nv_assembly, :nv_assembly_reasons,
                                  :city_council1, :city_council1_reasons,
                                  :city_council2, :city_council2_reasons,
                                  :judge1, :judge1_reasons,
                                  :judge2, :judge2_reasons,
                                  :judge3, :judge3_reasons,
                                  :shared)
  end
  def slate_params
    params.require(:slate).permit(:id, :name, :president, :president_reasons,
                                  :us_senate, :us_senate_reasons,
                                  :us_congress, :us_congress_reasons,
                                  :nv_senate, :nv_senate_reasons,
                                  :nv_assembly, :nv_assembly_reasons,
                                  :city_council1, :city_council1_reasons,
                                  :city_council2, :city_council2_reasons,
                                  :judge1, :judge1_reasons,
                                  :judge2, :judge2_reasons,
                                  :judge3, :judge3_reasons,
                                  :shared, issues_attributes: [:id, :name, :reasons, :slate_id, :_destroy])
  end
end



# class SlatesController < ApplicationController
#   before_action :authenticate_user!, except: :shared
#
#   def index
#     slates = current_user.slates
#     render json: slates
#   end
#
#   def show
#     slate = current_user.slates.find(params[:id])
#     render json: slate.to_json(include: :issues)
#   end
#
#   def create
#     slate = current_user.slates.create(new_slate_params)
#
#     params[:slate][:issues] && params[:slate][:issues].each do |issue|
#       slate.issues.create(name: issue[:name], reasons: issue[:reasons])
#     end
#
#     render json: slate.to_json(include: :issues)
#   end
#
#   def destroy
#     current_user.slates.find(params[:id]).destroy!
#     render json: true
#   end
#
#   def latest
#     slate = current_user.slates.order(:id).last
#     render json: slate.to_json(include: :issues)
#   end
#
#   def update
#     slate = current_user.slates.find_by(id: params[:id])
#     slate.update_attributes(slate_params)
#     render json: slate
#   end
#
#   def shared
#     slate = Slate.where(id: params[:id], shared: true).first
#     render json: slate.to_json(include: :issues)
#   end
#
#   private
#   def new_slate_params
#     params.require(:slate).permit(:id, :president, :president_reasons,
#                                   :us_senate, :us_senate_reasons,
#                                   :us_congress, :us_congress_reasons,
#                                   :nv_senate, :nv_senate_reasons,
#                                   :nv_assembly, :nv_assembly_reasons,
#                                   :city_council1, :city_council1_reasons,
#                                   :city_council2, :city_council2_reasons,
#                                   :judge1, :judge1_reasons,
#                                   :judge2, :judge2_reasons,
#                                   :judge3, :judge3_reasons,
#                                   :shared)
#   end
#   def slate_params
#     params.require(:slate).permit(:id, :president, :president_reasons,
#                                   :us_senate, :us_senate_reasons,
#                                   :us_congress, :us_congress_reasons,
#                                   :nv_senate, :nv_senate_reasons,
#                                   :nv_assembly, :nv_assembly_reasons,
#                                   :city_council1, :city_council1_reasons,
#                                   :city_council2, :city_council2_reasons,
#                                   :judge1, :judge1_reasons,
#                                   :judge2, :judge2_reasons,
#                                   :judge3, :judge3_reasons,
#                                   :shared, issues_attributes: [:id, :name, :reasons, :slate_id, :_destroy])
#   end
# end
