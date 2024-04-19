# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from ...core.pydantic_utilities import pydantic_v1
from .binary_tree_node_and_tree_value import BinaryTreeNodeAndTreeValue
from .binary_tree_node_value import BinaryTreeNodeValue
from .binary_tree_value import BinaryTreeValue
from .doubly_linked_list_node_and_list_value import DoublyLinkedListNodeAndListValue
from .doubly_linked_list_node_value import DoublyLinkedListNodeValue
from .doubly_linked_list_value import DoublyLinkedListValue
from .generic_value import GenericValue
from .node_id import NodeId
from .singly_linked_list_node_and_list_value import SinglyLinkedListNodeAndListValue
from .singly_linked_list_node_value import SinglyLinkedListNodeValue
from .singly_linked_list_value import SinglyLinkedListValue


class DebugVariableValue_IntegerValue(pydantic_v1.BaseModel):
    type: typing.Literal["integerValue"] = "integerValue"
    value: int


class DebugVariableValue_BooleanValue(pydantic_v1.BaseModel):
    type: typing.Literal["booleanValue"] = "booleanValue"
    value: bool


class DebugVariableValue_DoubleValue(pydantic_v1.BaseModel):
    type: typing.Literal["doubleValue"] = "doubleValue"
    value: float


class DebugVariableValue_StringValue(pydantic_v1.BaseModel):
    type: typing.Literal["stringValue"] = "stringValue"
    value: str


class DebugVariableValue_CharValue(pydantic_v1.BaseModel):
    type: typing.Literal["charValue"] = "charValue"
    value: str


class DebugVariableValue_MapValue(pydantic_v1.BaseModel):
    type: typing.Literal["mapValue"] = "mapValue"
    key_value_pairs: typing.List[DebugKeyValuePairs] = pydantic_v1.Field(alias="keyValuePairs")

    class Config:
        allow_population_by_field_name = True
        populate_by_name = True


class DebugVariableValue_ListValue(pydantic_v1.BaseModel):
    type: typing.Literal["listValue"] = "listValue"
    value: typing.List[DebugVariableValue]


class DebugVariableValue_BinaryTreeNodeValue(pydantic_v1.BaseModel):
    type: typing.Literal["binaryTreeNodeValue"] = "binaryTreeNodeValue"
    node_id: NodeId = pydantic_v1.Field(alias="nodeId")
    full_tree: BinaryTreeValue = pydantic_v1.Field(alias="fullTree")

    class Config:
        allow_population_by_field_name = True
        populate_by_name = True


class DebugVariableValue_SinglyLinkedListNodeValue(pydantic_v1.BaseModel):
    type: typing.Literal["singlyLinkedListNodeValue"] = "singlyLinkedListNodeValue"
    node_id: NodeId = pydantic_v1.Field(alias="nodeId")
    full_list: SinglyLinkedListValue = pydantic_v1.Field(alias="fullList")

    class Config:
        allow_population_by_field_name = True
        populate_by_name = True


class DebugVariableValue_DoublyLinkedListNodeValue(pydantic_v1.BaseModel):
    type: typing.Literal["doublyLinkedListNodeValue"] = "doublyLinkedListNodeValue"
    node_id: NodeId = pydantic_v1.Field(alias="nodeId")
    full_list: DoublyLinkedListValue = pydantic_v1.Field(alias="fullList")

    class Config:
        allow_population_by_field_name = True
        populate_by_name = True


class DebugVariableValue_UndefinedValue(pydantic_v1.BaseModel):
    type: typing.Literal["undefinedValue"] = "undefinedValue"


class DebugVariableValue_NullValue(pydantic_v1.BaseModel):
    type: typing.Literal["nullValue"] = "nullValue"


class DebugVariableValue_GenericValue(pydantic_v1.BaseModel):
    type: typing.Literal["genericValue"] = "genericValue"
    stringified_type: typing.Optional[str] = pydantic_v1.Field(alias="stringifiedType")
    stringified_value: str = pydantic_v1.Field(alias="stringifiedValue")

    class Config:
        allow_population_by_field_name = True
        populate_by_name = True


DebugVariableValue = typing.Union[
    DebugVariableValue_IntegerValue,
    DebugVariableValue_BooleanValue,
    DebugVariableValue_DoubleValue,
    DebugVariableValue_StringValue,
    DebugVariableValue_CharValue,
    DebugVariableValue_MapValue,
    DebugVariableValue_ListValue,
    DebugVariableValue_BinaryTreeNodeValue,
    DebugVariableValue_SinglyLinkedListNodeValue,
    DebugVariableValue_DoublyLinkedListNodeValue,
    DebugVariableValue_UndefinedValue,
    DebugVariableValue_NullValue,
    DebugVariableValue_GenericValue,
]
from .debug_key_value_pairs import DebugKeyValuePairs  # noqa: E402
from .debug_map_value import DebugMapValue  # noqa: E402

DebugVariableValue_MapValue.update_forward_refs(
    DebugKeyValuePairs=DebugKeyValuePairs, DebugMapValue=DebugMapValue, DebugVariableValue=DebugVariableValue
)
DebugVariableValue_ListValue.update_forward_refs(
    DebugKeyValuePairs=DebugKeyValuePairs, DebugMapValue=DebugMapValue, DebugVariableValue=DebugVariableValue
)
