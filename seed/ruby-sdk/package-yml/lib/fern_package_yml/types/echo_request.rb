# frozen_string_literal: true

require "ostruct"
require "json"

module SeedPackageYmlClient
  class EchoRequest
    # @return [String]
    attr_reader :name
    # @return [Integer]
    attr_reader :size
    # @return [OpenStruct] Additional properties unmapped to the current class definition
    attr_reader :additional_properties
    # @return [Object]
    attr_reader :_field_set
    protected :_field_set

    OMIT = Object.new

    # @param name [String]
    # @param size [Integer]
    # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
    # @return [SeedPackageYmlClient::EchoRequest]
    def initialize(name:, size:, additional_properties: nil)
      @name = name
      @size = size
      @additional_properties = additional_properties
      @_field_set = { "name": name, "size": size }
    end

    # Deserialize a JSON object to an instance of EchoRequest
    #
    # @param json_object [String]
    # @return [SeedPackageYmlClient::EchoRequest]
    def self.from_json(json_object:)
      struct = JSON.parse(json_object, object_class: OpenStruct)
      name = struct["name"]
      size = struct["size"]
      new(
        name: name,
        size: size,
        additional_properties: struct
      )
    end

    # Serialize an instance of EchoRequest to a JSON object
    #
    # @return [String]
    def to_json(*_args)
      @_field_set&.to_json
    end

    # Leveraged for Union-type generation, validate_raw attempts to parse the given
    #  hash and check each fields type against the current object's property
    #  definitions.
    #
    # @param obj [Object]
    # @return [Void]
    def self.validate_raw(obj:)
      obj.name.is_a?(String) != false || raise("Passed value for field obj.name is not the expected type, validation failed.")
      obj.size.is_a?(Integer) != false || raise("Passed value for field obj.size is not the expected type, validation failed.")
    end
  end
end