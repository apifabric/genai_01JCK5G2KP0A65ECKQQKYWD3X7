# using resolved_model gpt-4o-2024-08-06# created from response, to create create_db_models.sqlite, with test data
#    that is used to create project
# should run without error in manager 
#    if not, check for decimal, indent, or import issues

import decimal
import logging
import sqlalchemy
from sqlalchemy.sql import func 
from logic_bank.logic_bank import Rule
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, Date, DateTime, Numeric, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import relationship
from datetime import date   
from datetime import datetime

logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

Base = declarative_base()  # from system/genai/create_db_models_inserts/create_db_models_prefix.py


class LogEntry(Base):
    """description: Table to store log entries for system monitoring."""
    __tablename__ = 'log_entry'

    id = Column(Integer, primary_key=True, autoincrement=True)
    timestamp = Column(DateTime, default=datetime.utcnow)
    message = Column(String(255))
    level = Column(String(50))
    source = Column(String(100))


class CPUUsage(Base):
    """description: Table to track detailed CPU usage statistics."""
    __tablename__ = 'cpu_usage'

    id = Column(Integer, primary_key=True, autoincrement=True)
    log_entry_id = Column(Integer, ForeignKey('log_entry.id'))
    user_time = Column(Integer)
    system_time = Column(Integer)
    idle_time = Column(Integer)


class Process(Base):
    """description: Table for storing information about processes in the system."""
    __tablename__ = 'process'

    id = Column(Integer, primary_key=True, autoincrement=True)
    pid = Column(Integer, nullable=False)
    name = Column(String(150))
    cpu_usage_id = Column(Integer, ForeignKey('cpu_usage.id'))
    cpu_percentage = Column(Integer)


class Alert(Base):
    """description: Table to store alerts generated based on log analysis."""
    __tablename__ = 'alert'

    id = Column(Integer, primary_key=True, autoincrement=True)
    log_entry_id = Column(Integer, ForeignKey('log_entry.id'))
    message = Column(String(255))
    active = Column(Boolean, default=True)
    severity = Column(String(50))


class AlertSettings(Base):
    """description: Table to configure alert thresholds and conditions."""
    __tablename__ = 'alert_settings'

    id = Column(Integer, primary_key=True, autoincrement=True)
    threshold = Column(Integer)
    condition = Column(String(100))
    active = Column(Boolean, default=True)


class SystemMetrics(Base):
    """description: Table to store general system metrics."""
    __tablename__ = 'system_metrics'

    id = Column(Integer, primary_key=True, autoincrement=True)
    log_entry_id = Column(Integer, ForeignKey('log_entry.id'))
    cpu_load = Column(String(10))
    memory_usage = Column(Integer)
    disk_io = Column(String(100))


class ThresholdLog(Base):
    """description: Table to log threshold breaches and events."""
    __tablename__ = 'threshold_log'

    id = Column(Integer, primary_key=True, autoincrement=True)
    alert_settings_id = Column(Integer, ForeignKey('alert_settings.id'))
    log_entry_id = Column(Integer, ForeignKey('log_entry.id'))
    occurred_at = Column(DateTime, default=datetime.utcnow)


class UserActivity(Base):
    """description: Table to store user activities related to system operations."""
    __tablename__ = 'user_activity'

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer)
    action = Column(String(255))
    log_entry_id = Column(Integer, ForeignKey('log_entry.id'))
    performed_at = Column(DateTime, default=datetime.utcnow)


class Notification(Base):
    """description: Table to manage notifications sent to users."""
    __tablename__ = 'notification'

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer)
    message = Column(String(255))
    sent_at = Column(DateTime, default=datetime.utcnow)


class SystemEvent(Base):
    """description: Table to log significant system events."""
    __tablename__ = 'system_event'

    id = Column(Integer, primary_key=True, autoincrement=True)
    event_name = Column(String(100))
    log_entry_id = Column(Integer, ForeignKey('log_entry.id'))
    description = Column(String(255))


class TopologyChange(Base):
    """description: Table to log changes in the system's topology."""
    __tablename__ = 'topology_change'

    id = Column(Integer, primary_key=True, autoincrement=True)
    component_name = Column(String(100))
    change_description = Column(String(255))
    changed_at = Column(DateTime, default=datetime.utcnow)


class SystemUser(Base):
    """description: Table to manage system user details."""
    __tablename__ = 'system_user'

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(100), nullable=False)
    email = Column(String(150))
    active = Column(Boolean, default=True)


# ALS/GenAI: Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# ALS/GenAI: Prepare for sample data

from datetime import datetime, date

# LogEntry test data
log_entry1 = LogEntry(timestamp=datetime(2023, 11, 22, 10, 33), message="CPU usage critically high", level="Error", source="Monitor")
log_entry2 = LogEntry(timestamp=datetime(2023, 11, 22, 10, 34), message="Disk nearing capacity", level="Warning", source="Monitor")
log_entry3 = LogEntry(timestamp=datetime(2023, 11, 22, 10, 35), message="Memory usage normal", level="Info", source="Monitor")
log_entry4 = LogEntry(timestamp=datetime(2023, 11, 22, 10, 36), message="New device connected", level="Info", source="System")

# CPUUsage test data
cpu_usage1 = CPUUsage(log_entry_id=1, user_time=30, system_time=15, idle_time=55)
cpu_usage2 = CPUUsage(log_entry_id=2, user_time=50, system_time=25, idle_time=25)
cpu_usage3 = CPUUsage(log_entry_id=3, user_time=20, system_time=10, idle_time=70)
cpu_usage4 = CPUUsage(log_entry_id=4, user_time=40, system_time=30, idle_time=30)

# Process test data
process1 = Process(pid=123, name="Process1", cpu_usage_id=1, cpu_percentage=10)
process2 = Process(pid=456, name="Process2", cpu_usage_id=1, cpu_percentage=5)
process3 = Process(pid=789, name="Process3", cpu_usage_id=2, cpu_percentage=20)
process4 = Process(pid=101, name="Process4", cpu_usage_id=2, cpu_percentage=25)

# Alert test data
alert1 = Alert(log_entry_id=1, message="High CPU warning", active=True, severity="High")
alert2 = Alert(log_entry_id=2, message="Disk warning", active=True, severity="Medium")
alert3 = Alert(log_entry_id=3, message="Memory normal", active=False, severity="Low")
alert4 = Alert(log_entry_id=4, message="New device alert", active=True, severity="Info")

# AlertSettings test data
alert_settings1 = AlertSettings(threshold=90, condition="CPU > 80", active=True)
alert_settings2 = AlertSettings(threshold=80, condition="Disk > 75", active=True)
alert_settings3 = AlertSettings(threshold=70, condition="Memory < 60", active=True)
alert_settings4 = AlertSettings(threshold=60, condition="IO Rate High", active=True)

# SystemMetrics test data
system_metrics1 = SystemMetrics(log_entry_id=1, cpu_load="High", memory_usage=4096, disk_io="Normal")
system_metrics2 = SystemMetrics(log_entry_id=2, cpu_load="Moderate", memory_usage=8192, disk_io="High")
system_metrics3 = SystemMetrics(log_entry_id=3, cpu_load="Low", memory_usage=2048, disk_io="Low")
system_metrics4 = SystemMetrics(log_entry_id=4, cpu_load="Moderate", memory_usage=3072, disk_io="Moderate")

# ThresholdLog test data
threshold_log1 = ThresholdLog(alert_settings_id=1, log_entry_id=1, occurred_at=datetime(2023, 11, 22, 10, 40))
threshold_log2 = ThresholdLog(alert_settings_id=2, log_entry_id=2, occurred_at=datetime(2023, 11, 22, 10, 45))
threshold_log3 = ThresholdLog(alert_settings_id=3, log_entry_id=3, occurred_at=datetime(2023, 11, 22, 10, 50))
threshold_log4 = ThresholdLog(alert_settings_id=4, log_entry_id=4, occurred_at=datetime(2023, 11, 22, 10, 55))

# UserActivity test data
user_activity1 = UserActivity(user_id=1, action="Login", log_entry_id=1, performed_at=datetime(2023, 11, 22, 11, 0))
user_activity2 = UserActivity(user_id=2, action="Logout", log_entry_id=2, performed_at=datetime(2023, 11, 22, 11, 5))
user_activity3 = UserActivity(user_id=3, action="Upload File", log_entry_id=3, performed_at=datetime(2023, 11, 22, 11, 10))
user_activity4 = UserActivity(user_id=4, action="Download File", log_entry_id=4, performed_at=datetime(2023, 11, 22, 11, 15))

# Notification test data
notification1 = Notification(user_id=1, message="High CPU Usage", sent_at=datetime(2023, 11, 22, 12, 0))
notification2 = Notification(user_id=2, message="Disk Space Low", sent_at=datetime(2023, 11, 22, 12, 10))
notification3 = Notification(user_id=3, message="System Back to Normal", sent_at=datetime(2023, 11, 22, 12, 20))
notification4 = Notification(user_id=4, message="New User Registered", sent_at=datetime(2023, 11, 22, 12, 30))

# SystemEvent test data
system_event1 = SystemEvent(event_name="Reboot", log_entry_id=1, description="System rebooted successfully.")
system_event2 = SystemEvent(event_name="Update", log_entry_id=2, description="System updated to latest version.")
system_event3 = SystemEvent(event_name="Backup", log_entry_id=3, description="System backup completed.")
system_event4 = SystemEvent(event_name="Shutdown", log_entry_id=4, description="System shutdown initiated.")

# TopologyChange test data
topology_change1 = TopologyChange(component_name="Server1", change_description="Added new storage.", changed_at=datetime(2023, 11, 22, 13, 0))
topology_change2 = TopologyChange(component_name="RouterX", change_description="Updated firmware.", changed_at=datetime(2023, 11, 22, 13, 10))
topology_change3 = TopologyChange(component_name="SwitchY", change_description="Replaced faulty port.", changed_at=datetime(2023, 11, 22, 13, 20))
topology_change4 = TopologyChange(component_name="FirewallZ", change_description="Changed rules.", changed_at=datetime(2023, 11, 22, 13, 30))

# SystemUser test data
system_user1 = SystemUser(username="admin", email="admin@example.com", active=True)
system_user2 = SystemUser(username="userA", email="usera@example.com", active=True)
system_user3 = SystemUser(username="userB", email="userb@example.com", active=False)
system_user4 = SystemUser(username="guest", email="guest@example.com", active=True)


session.add_all([log_entry1, log_entry2, log_entry3, log_entry4, cpu_usage1, cpu_usage2, cpu_usage3, cpu_usage4, process1, process2, process3, process4, alert1, alert2, alert3, alert4, alert_settings1, alert_settings2, alert_settings3, alert_settings4, system_metrics1, system_metrics2, system_metrics3, system_metrics4, threshold_log1, threshold_log2, threshold_log3, threshold_log4, user_activity1, user_activity2, user_activity3, user_activity4, notification1, notification2, notification3, notification4, system_event1, system_event2, system_event3, system_event4, topology_change1, topology_change2, topology_change3, topology_change4, system_user1, system_user2, system_user3, system_user4])
session.commit()
