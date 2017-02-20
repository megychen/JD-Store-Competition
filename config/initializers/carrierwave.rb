
require 'carrierwave/storage/abstract'
require 'carrierwave/storage/file'
require 'carrierwave/storage/fog'

CarrierWave.configure do |config|
  if Rails.env.production?
    config.storage :fog
    config.fog_credentials = {
      provider: 'AWS',
      aws_access_key_id: ENV["AWS_ACCESS_KEY_ID"],

      aws_secret_access_key: ENV["AWS_SECRET_ACCESS_KEY"],      # 你的 secret key

      region: ENV["ap-northeast-1"]

    }
    config.fog_directory  = ENV["AWS_BUCKET_NAME"] # 你设定的 bucket name
  else
    config.storage :file
  end
end
