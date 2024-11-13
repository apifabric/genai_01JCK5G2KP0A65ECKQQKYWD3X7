# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 13, 2024 16:26:21
# Database: sqlite:////tmp/tmp.wVW5TkxhID-01JCK5G2KP0A65ECKQQKYWD3X7/System_Monitoring/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class AlertSetting(SAFRSBaseX, Base):
    """
    description: Table to configure alert thresholds and conditions.
    """
    __tablename__ = 'alert_settings'
    _s_collection_name = 'AlertSetting'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    threshold = Column(Integer)
    condition = Column(String(100))
    active = Column(Boolean)

    # parent relationships (access parent)

    # child relationships (access children)
    ThresholdLogList : Mapped[List["ThresholdLog"]] = relationship(back_populates="alert_settings")



class LogEntry(SAFRSBaseX, Base):
    """
    description: Table to store log entries for system monitoring.
    """
    __tablename__ = 'log_entry'
    _s_collection_name = 'LogEntry'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    timestamp = Column(DateTime)
    message = Column(String(255))
    level = Column(String(50))
    source = Column(String(100))

    # parent relationships (access parent)

    # child relationships (access children)
    AlertList : Mapped[List["Alert"]] = relationship(back_populates="log_entry")
    CpuUsageList : Mapped[List["CpuUsage"]] = relationship(back_populates="log_entry")
    SystemEventList : Mapped[List["SystemEvent"]] = relationship(back_populates="log_entry")
    SystemMetricList : Mapped[List["SystemMetric"]] = relationship(back_populates="log_entry")
    ThresholdLogList : Mapped[List["ThresholdLog"]] = relationship(back_populates="log_entry")
    UserActivityList : Mapped[List["UserActivity"]] = relationship(back_populates="log_entry")



class Notification(SAFRSBaseX, Base):
    """
    description: Table to manage notifications sent to users.
    """
    __tablename__ = 'notification'
    _s_collection_name = 'Notification'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer)
    message = Column(String(255))
    sent_at = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)



class SystemUser(SAFRSBaseX, Base):
    """
    description: Table to manage system user details.
    """
    __tablename__ = 'system_user'
    _s_collection_name = 'SystemUser'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    username = Column(String(100), nullable=False)
    email = Column(String(150))
    active = Column(Boolean)

    # parent relationships (access parent)

    # child relationships (access children)



class TopologyChange(SAFRSBaseX, Base):
    """
    description: Table to log changes in the system's topology.
    """
    __tablename__ = 'topology_change'
    _s_collection_name = 'TopologyChange'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    component_name = Column(String(100))
    change_description = Column(String(255))
    changed_at = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)



class Alert(SAFRSBaseX, Base):
    """
    description: Table to store alerts generated based on log analysis.
    """
    __tablename__ = 'alert'
    _s_collection_name = 'Alert'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    log_entry_id = Column(ForeignKey('log_entry.id'))
    message = Column(String(255))
    active = Column(Boolean)
    severity = Column(String(50))

    # parent relationships (access parent)
    log_entry : Mapped["LogEntry"] = relationship(back_populates=("AlertList"))

    # child relationships (access children)



class CpuUsage(SAFRSBaseX, Base):
    """
    description: Table to track detailed CPU usage statistics.
    """
    __tablename__ = 'cpu_usage'
    _s_collection_name = 'CpuUsage'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    log_entry_id = Column(ForeignKey('log_entry.id'))
    user_time = Column(Integer)
    system_time = Column(Integer)
    idle_time = Column(Integer)

    # parent relationships (access parent)
    log_entry : Mapped["LogEntry"] = relationship(back_populates=("CpuUsageList"))

    # child relationships (access children)
    ProcessList : Mapped[List["Process"]] = relationship(back_populates="cpu_usage")



class SystemEvent(SAFRSBaseX, Base):
    """
    description: Table to log significant system events.
    """
    __tablename__ = 'system_event'
    _s_collection_name = 'SystemEvent'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    event_name = Column(String(100))
    log_entry_id = Column(ForeignKey('log_entry.id'))
    description = Column(String(255))

    # parent relationships (access parent)
    log_entry : Mapped["LogEntry"] = relationship(back_populates=("SystemEventList"))

    # child relationships (access children)



class SystemMetric(SAFRSBaseX, Base):
    """
    description: Table to store general system metrics.
    """
    __tablename__ = 'system_metrics'
    _s_collection_name = 'SystemMetric'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    log_entry_id = Column(ForeignKey('log_entry.id'))
    cpu_load = Column(String(10))
    memory_usage = Column(Integer)
    disk_io = Column(String(100))

    # parent relationships (access parent)
    log_entry : Mapped["LogEntry"] = relationship(back_populates=("SystemMetricList"))

    # child relationships (access children)



class ThresholdLog(SAFRSBaseX, Base):
    """
    description: Table to log threshold breaches and events.
    """
    __tablename__ = 'threshold_log'
    _s_collection_name = 'ThresholdLog'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    alert_settings_id = Column(ForeignKey('alert_settings.id'))
    log_entry_id = Column(ForeignKey('log_entry.id'))
    occurred_at = Column(DateTime)

    # parent relationships (access parent)
    alert_settings : Mapped["AlertSetting"] = relationship(back_populates=("ThresholdLogList"))
    log_entry : Mapped["LogEntry"] = relationship(back_populates=("ThresholdLogList"))

    # child relationships (access children)



class UserActivity(SAFRSBaseX, Base):
    """
    description: Table to store user activities related to system operations.
    """
    __tablename__ = 'user_activity'
    _s_collection_name = 'UserActivity'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer)
    action = Column(String(255))
    log_entry_id = Column(ForeignKey('log_entry.id'))
    performed_at = Column(DateTime)

    # parent relationships (access parent)
    log_entry : Mapped["LogEntry"] = relationship(back_populates=("UserActivityList"))

    # child relationships (access children)



class Process(SAFRSBaseX, Base):
    """
    description: Table for storing information about processes in the system.
    """
    __tablename__ = 'process'
    _s_collection_name = 'Process'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    pid = Column(Integer, nullable=False)
    name = Column(String(150))
    cpu_usage_id = Column(ForeignKey('cpu_usage.id'))
    cpu_percentage = Column(Integer)

    # parent relationships (access parent)
    cpu_usage : Mapped["CpuUsage"] = relationship(back_populates=("ProcessList"))

    # child relationships (access children)
