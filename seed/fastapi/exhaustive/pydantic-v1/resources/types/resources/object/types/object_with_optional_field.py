# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing
import uuid

import pydantic

from ......core.datetime_utils import serialize_datetime
from ......core.pydantic_utilities import deep_union_pydantic_dicts


class ObjectWithOptionalField(pydantic.BaseModel):
    string: typing.Optional[str] = None
    integer: typing.Optional[int] = None
    long_: typing.Optional[int] = pydantic.Field(alias="long", default=None)
    double: typing.Optional[float] = None
    bool_: typing.Optional[bool] = pydantic.Field(alias="bool", default=None)
    datetime: typing.Optional[dt.datetime] = None
    date: typing.Optional[dt.date] = None
    uuid_: typing.Optional[uuid.UUID] = pydantic.Field(alias="uuid", default=None)
    base_64: typing.Optional[str] = pydantic.Field(alias="base64", default=None)
    list_: typing.Optional[typing.List[str]] = pydantic.Field(alias="list", default=None)
    set_: typing.Optional[typing.Set[str]] = pydantic.Field(alias="set", default=None)
    map_: typing.Optional[typing.Dict[int, str]] = pydantic.Field(alias="map", default=None)
    bigint: typing.Optional[str] = None

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults_exclude_unset: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        kwargs_with_defaults_exclude_none: typing.Any = {"by_alias": True, "exclude_none": True, **kwargs}

        return deep_union_pydantic_dicts(
            super().dict(**kwargs_with_defaults_exclude_unset), super().dict(**kwargs_with_defaults_exclude_none)
        )

    class Config:
        allow_population_by_field_name = True
        populate_by_name = True
        extra = pydantic.Extra.forbid
        json_encoders = {dt.datetime: serialize_datetime}
